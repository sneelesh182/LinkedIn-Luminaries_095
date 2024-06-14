document.addEventListener('DOMContentLoaded', function() {
    // styles
    const style = document.createElement('style');
    style.textContent = `
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            font-family: Arial, sans-serif;
        }
        #container {
            display: flex;
            height: 100%;
        }
        .ava-contain {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0px;
        }
        #left-panel {
            width: 26%;
            background-color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        #right-panel {
            width: 40%;
            background-color:white;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        #webflow {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .background-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        #signup-box {
            text-align: center;
            max-width: 400px;
        }
        #signup-box h1 {
            font-size: 2em;
            margin-bottom: 20px;
        }
        #google-signup {
            background-color: white;
            color: white;
            border: 1px solid black;
            border-radius: 25px;
            padding: 15px 20px;
            width: 100%;
            margin-bottom: 15px;
            cursor: pointer;
        }
        
        #email-signup {
            background-color: white;
            color: black;
            border: 1px solid grey;
            border-radius: 25px;
            padding: 15px 20px;
            width: 100%;
            margin-bottom: 15px;
            cursor: pointer;
            font-weight: 400;
        }
            
        #google-signup {
            color: white;
            background-color: #1a1a1a;
        }
        #or-divider {
            margin: 20px 0;
            font-size: 1em;
            color: #666;
        }
        #signup-box p {
            font-size: 0.9em;
            color: #666;
        }
        #signup-box a {
            color: #000;
            text-decoration: none;
        }
        #signup-box a:hover {
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);

    // buttons
    document.getElementById('google-signup').addEventListener('click', function() {
        alert('Sign up with Google clicked');
    });

    document.getElementById('email-signup').addEventListener('click', function() {
        alert('Continue with email clicked');
    });

   
});
