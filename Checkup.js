document.getElementById('test-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form
    const neutrophils = parseFloat(document.getElementById('neutrophils').value);
    const lymphocytes = parseFloat(document.getElementById('lymphocytes').value);
    const eosinophils = parseFloat(document.getElementById('eosinophils').value);
    const monocytes = parseFloat(document.getElementById('monocytes').value);
    const basophils = parseFloat(document.getElementById('basophils').value);
    const rbc = parseFloat(document.getElementById('rbc').value);
    const pcv = parseFloat(document.getElementById('pcv').value);
    const mcv = parseFloat(document.getElementById('mcv').value);
    const mch = parseFloat(document.getElementById('mch').value);
    const mchc = parseFloat(document.getElementById('mchc').value);
    const plateletCount = parseFloat(document.getElementById('platelet-count').value);

    // Disease detection logic
    let resultText = 'Based on the entered values, no specific disease detected.';
    let diseaseInfo = '';

    if (eosinophils > 6) {
        resultText = 'Possible indication of allergies or parasitic infections.';
        diseaseInfo += '<strong>Dengue:</strong> Often shows elevated eosinophils.<br>';
        diseaseInfo += '<strong>Malaria:</strong> Can cause high eosinophil counts.<br>';
    }
    if (lymphocytes > 43 && neutrophils < 44) {
        resultText = 'Possible indication of viral infections.';
        diseaseInfo += '<strong>Chickenpox:</strong> High lymphocytes can be a sign.<br>';
        diseaseInfo += '<strong>Dengue:</strong> Also associated with high lymphocytes.<br>';
    }
    if (monocytes > 10) {
        resultText = 'Possible indication of chronic infections or autoimmune diseases.';
        diseaseInfo += '<strong>Chronic Infections:</strong> Elevated monocytes may indicate.<br>';
        diseaseInfo += '<strong>Autoimmune Diseases:</strong> Such as lupus or rheumatoid arthritis.<br>';
    }
    if (rbc < 4.10 || rbc > 5.30) {
        resultText = 'Possible indication of anemia or polycythemia.';
        diseaseInfo += '<strong>Anemia:</strong> May cause low RBC.<br>';
        diseaseInfo += '<strong>Polycythemia:</strong> High RBC levels.<br>';
    }
    if (pcv < 36 || pcv > 47) {
        resultText = 'Possible indication of anemia or dehydration.';
        diseaseInfo += '<strong>Anemia:</strong> Low PCV levels.<br>';
        diseaseInfo += '<strong>Dehydration:</strong> Can cause high PCV.<br>';
    }
    if (mcv < 76 || mcv > 96) {
        resultText = 'Possible indication of anemia or other blood disorders.';
        diseaseInfo += '<strong>Anemia:</strong> Abnormal MCV levels.<br>';
        diseaseInfo += '<strong>Other Blood Disorders:</strong> Abnormal MCV values.<br>';
    }
    if (mch < 26 || mch > 32) {
        resultText = 'Possible indication of anemia or other blood disorders.';
        diseaseInfo += '<strong>Anemia:</strong> Low or high MCH levels.<br>';
    }
    if (mchc < 32 || mchc > 36) {
        resultText = 'Possible indication of anemia or other blood disorders.';
        diseaseInfo += '<strong>Anemia:</strong> MCHC levels outside normal range.<br>';
    }
    if (plateletCount < 150000 || plateletCount > 450000) {
        resultText = 'Possible indication of platelet disorders or blood diseases.';
        diseaseInfo += '<strong>Platelet Disorders:</strong> Abnormal platelet count.<br>';
        diseaseInfo += '<strong>Blood Diseases:</strong> Such as thrombocytopenia or thrombocytosis.<br>';
    }

    // Display result
    document.getElementById('result').textContent = resultText;
    document.getElementById('disease-info').innerHTML = diseaseInfo;

    // Display chart
    const ctx = document.getElementById('test-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Neutrophils',
                'Lymphocytes',
                'Eosinophils',
                'Monocytes',
                'Basophils',
                'RBC',
                'PCV',
                'MCV',
                'MCH',
                'MCHC',
                'Platelet Count'
            ],
            datasets: [{
                label: 'Blood Test Results',
                data: [
                    neutrophils, lymphocytes, eosinophils, monocytes, basophils, rbc, pcv, mcv, mch, mchc, plateletCount
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
    