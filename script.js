
document.getElementById('submitButton').addEventListener('click', function() {
    const version = document.getElementById('version').value;
    const architecture = document.getElementById('architecture').value;
    const ha = document.getElementById('ha').value;
    const eventFlowRate = parseFloat(document.getElementById('event_flow_rate').value);
    const triggerStats = parseFloat(document.getElementById('trigger_stats').value);
    const profiling = parseFloat(document.getElementById('profiling').value);
    const customTriggers = document.getElementById('custom_triggers').value;
    const restrictionFilters = document.getElementById('restriction_filters').value;
    
    let report = "<h2>Deployment Specifications and KPIs Report</h2>";
    report += "<h3>Netcool/OMNIbus</h3>";
    report += "<ul>";
    report += "<li><strong>Version:</strong> " + checkVersion(version) + "</li>";
    report += "<li><strong>Architecture:</strong> " + architecture + "</li>";
    report += "<li><strong>High Availability:</strong> <span style='color: " + (ha === 'Yes' ? 'green' : 'red') + "'>" + ha + "</span></li>";
    report += "<li><strong>Event flow rate:</strong> <span style='color: " + (eventFlowRate > 250 ? 'red' : 'black') + "'>" + eventFlowRate + "</span></li>";
    report += "<li><strong>Object Server Trigger Stats:</strong> <span style='color: " + (triggerStats > 50 ? 'red' : 'black') + "'>" + triggerStats + "</span></li>";
    report += "<li><strong>Object Server Profiling:</strong> <span style='color: " + ( profiling > 50 ? 'red' : 'black') + "'>" + profiling + "</span></li>";
    report += "<li><strong># of Triggers/Procedures created:</strong> <span style='color: " + ( customTriggers > 200 ? 'red' : 'black') + "'>" + customTriggers + "</span></li>";
    report += "<li><strong>User restriction filters created:</strong> <span style='color:" + ( restrictionFilters === 'Yes' ? 'green' : 'red') + "'>" + restrictionFilters + "</span></li>";
    report += "</ul>";

    document.getElementById('report').innerHTML = report;
});

function checkVersion(version) {
    if (version >= '8.1.0.30' && version <= '8.1.0.34') {
        return version;
    } else {
        return "<span style='color: red'>" + version + "</span>";
    }
}


function printPageAsPDF() {
    window.print();
}
