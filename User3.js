document.addEventListener('DOMContentLoaded', () => {
    const suggestions = {
        viral_fever: {
            medicine: "Paracetamol, Ibuprofen",
            diet: "Stay hydrated, Light meals",
            lifestyle: "Rest, Avoid strenuous activities"
        },
        dengue: {
            medicine: "Pain relievers (avoid aspirin), Hydration",
            diet: "High fluid intake, Nutrient-rich foods",
            lifestyle: "Rest, Avoid mosquito bites"
        },
        malaria: {
            medicine: "Anti-malarial drugs (e.g., Chloroquine, Artemisinin-based combination therapies)",
            diet: "Balanced diet, Avoid fatty foods",
            lifestyle: "Rest, Prevent mosquito bites"
        },
        hypertension: {
            medicine: "ACE inhibitors, Beta-blockers",
            diet: "Low-sodium diet, High potassium foods",
            lifestyle: "Regular exercise, Reduce stress"
        },
        diabetes: {
            medicine: "Metformin, Insulin",
            diet: "Low-carb diet, High fiber foods",
            lifestyle: "Regular exercise, Monitor blood sugar levels"
        },
        flu: {
            medicine: "Antiviral medications, Pain relievers",
            diet: "Stay hydrated, Eat warm soups",
            lifestyle: "Rest, Avoid contact with others"
        },
        cold: {
            medicine: "Decongestants, Cough syrup",
            diet: "Hydration, Warm beverages",
            lifestyle: "Rest, Avoid cold environments"
        },
        pneumonia: {
            medicine: "Antibiotics, Cough medicine",
            diet: "Nutrient-rich diet, Plenty of fluids",
            lifestyle: "Rest, Avoid smoking"
        },
        chronic_bronchitis: {
            medicine: "Bronchodilators, Steroids",
            diet: "Healthy diet, Avoid dairy if it worsens symptoms",
            lifestyle: "Quit smoking, Avoid respiratory irritants"
        },
        gastroenteritis: {
            medicine: "Antidiarrheals, Rehydration solutions",
            diet: "BRAT diet (Bananas, Rice, Applesauce, Toast)",
            lifestyle: "Rest, Avoid contaminated food and water"
        },
        peptic_ulcer: {
            medicine: "Proton pump inhibitors, Antacids",
            diet: "Avoid spicy and acidic foods, Eat smaller meals",
            lifestyle: "Avoid smoking and alcohol, Manage stress"
        },
        arthritis: {
            medicine: "NSAIDs, Disease-modifying antirheumatic drugs (DMARDs)",
            diet: "Anti-inflammatory foods, Omega-3 fatty acids",
            lifestyle: "Regular exercise, Physical therapy"
        },
        eczema: {
            medicine: "Topical steroids, Moisturizers",
            diet: "Avoid allergens, Balanced diet",
            lifestyle: "Moisturize regularly, Avoid scratching"
        },
        migraine: {
            medicine: "Pain relievers, Triptans",
            diet: "Avoid trigger foods, Regular meals",
            lifestyle: "Manage stress, Maintain regular sleep patterns"
        },
        insomnia: {
            medicine: "Sleep aids, Melatonin",
            diet: "Avoid caffeine and heavy meals before bed",
            lifestyle: "Maintain a sleep routine, Relaxation techniques"
        }
    };

    const checkboxes = document.querySelectorAll('input[name="disease"]');
    const suggestionContent = document.getElementById('suggestion-content');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            let selectedDiseases = [];
            checkboxes.forEach(cb => {
                if (cb.checked) {
                    selectedDiseases.push(cb.value);
                }
            });

            if (selectedDiseases.length > 0) {
                let suggestionsHtml = '<ul>';
                selectedDiseases.forEach(disease => {
                    const info = suggestions[disease];
                    suggestionsHtml += `
                        <li>
                            <h3>${disease.replace(/_/g, ' ').toUpperCase()}</h3>
                            <strong>Medicine:</strong> ${info.medicine}<br>
                            <strong>Diet:</strong> ${info.diet}<br>
                            <strong>Lifestyle:</strong> ${info.lifestyle}
                        </li>
                    `;
                });
                suggestionsHtml += '</ul>';
                suggestionContent.innerHTML = suggestionsHtml;
            } else {
                suggestionContent.innerHTML = '<p>No suggestions available. Please select a disease.</p>';
            }
        });
    });
});
