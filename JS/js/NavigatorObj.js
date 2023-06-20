function detectBrowser() { 
    const browsername = "Browser Name: " + navigator.bName; 
    document.getElementById("browser").innerHTML = browsername;

    const browserversion = "Browser Version: " + navigator.bName; 
    document.getElementById("browserversion").innerHTML = browserversion;

} 



detectBrowser();