// DOMContentLoaded event fires when the initial HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // အရေးကြီး !!! - သင်၏ Outline Access Keys များကို ဤနေရာတွင် ထည့်ပါ။
    // Key တစ်ခုချင်းစီကို Single Quote ('') သို့မဟုတ် Double Quote ("") 
    // အတွင်းထည့်ပြီး ကော်မာ (,) ဖြင့်ခြားပေးပါ။
    // =================================================================
    const accessKeys = [
    'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp2U1RzYmlkSnV0@123.45.67.89:12345/?outline=1',
    'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpBSE5HbG5LZmFv@123.45.67.90:54321/?outline=1',
    'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpTYW9rc3dRbkVu@123.45.67.91:11223/?outline=1'
];

    // Get references to HTML elements
    const getKeyBtn = document.getElementById('getKeyBtn');
    const keyDisplay = document.getElementById('key-display');
    const accessKeyText = document.getElementById('accessKeyText');
    const copyBtn = document.getElementById('copyBtn');

    // Event listener for the "Get Key" button
    getKeyBtn.addEventListener('click', () => {
        if (accessKeys.length > 0) {
            // Select a random key from the array
            const randomIndex = Math.floor(Math.random() * accessKeys.length);
            const randomKey = accessKeys[randomIndex];

            // Display the key in the text area
            accessKeyText.textContent = randomKey;

            // Show the key display section
            keyDisplay.classList.remove('hidden');
            
            // Change button text after first click
            getKeyBtn.textContent = 'နောက်ထပ် Key တစ်ခုရယူရန်';
        } else {
            // Handle case where no keys are available
            accessKeyText.textContent = ' দুঃখিত, বর্তমানে কোনো কী উপলব্ধ নেই।';
            keyDisplay.classList.remove('hidden');
        }
    });

    // Event listener for the "Copy" button
    copyBtn.addEventListener('click', () => {
        // Get the key text to copy
        const keyToCopy = accessKeyText.textContent;

        // Use the modern Navigator Clipboard API to copy text
        navigator.clipboard.writeText(keyToCopy).then(() => {
            // Provide visual feedback to the user
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'ကူးယူပြီးပါပြီ!';
            copyBtn.style.backgroundColor = '#17a2b8'; // Change color to info blue

            // Reset the button text after 2 seconds
            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.backgroundColor = '#28a745'; // Reset to original green
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            // You could show an error message to the user here
        });
    });
});
