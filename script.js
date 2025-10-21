// DOMContentLoaded event fires when the initial HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // အရေးကြီး !!! - သင်၏ Outline Access Keys များကို ဤနေရာတွင် ထည့်ပါ။
    // Key တစ်ခုချင်းစီကို Single Quote ('') သို့မဟုတ် Double Quote ("") 
    // အတွင်းထည့်ပြီး ကော်မာ (,) ဖြင့်ခြားပေးပါ။
    // =================================================================
    const accessKeys = [
        'ss://your-first-outline-key-here',
        'ss://your-second-outline-key-here',
        'ss://your-third-outline-key-here',
        // လိုအပ်သလောက် Key များကို ဒီမှာထပ်ထည့်နိုင်ပါတယ်
    ];

    // Get references to HTML elements for VPN functionality
    const getKeyBtn = document.getElementById('getKeyBtn');
    const keyDisplay = document.getElementById('key-display');
    const accessKeyText = document.getElementById('accessKeyText');
    const copyBtn = document.getElementById('copyBtn');
    
    // Get references to HTML elements for Theme Switcher (NEW)
    const themeToggle = document.getElementById('theme-toggle');

    // ====== THEME SWITCHER LOGIC (NEW) ======
    // Function to set the theme
    const setTheme = (isDark) => {
        if (isDark) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    };

    // Check for saved theme in localStorage when the page loads
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
        setTheme(true);
    } else {
        themeToggle.checked = false;
        setTheme(false);
    }

    // Event listener for the theme toggle switch
    themeToggle.addEventListener('change', () => {
        setTheme(themeToggle.checked);
    });
    // =========================================


    // ====== VPN KEY GENERATOR LOGIC (Existing) ======
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
            accessKeyText.textContent = 'တောင်းပန်ပါတယ်၊ ယခုလက်ရှိ Key မရှိသေးပါ။';
            keyDisplay.classList.remove('hidden');
        }
    });

    // Event listener for the "Copy" button
    copyBtn.addEventListener('click', () => {
        const keyToCopy = accessKeyText.textContent;

        navigator.clipboard.writeText(keyToCopy).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'ကူးယူပြီးပါပြီ!';
            copyBtn.style.backgroundColor = '#17a2b8';

            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.style.backgroundColor = '#28a745';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});
