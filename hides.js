//JavaScript function that hides email addresses to prevent unauthorized access

function protect_email(email) {
    var parts = email.split("@");
    var username = parts[0];
    var domain = parts[1];
    
    if (username.length > 5) {
      username = username.slice(0, 5) + "...";
    }
    
    return username + "@" + domain;
  }
  
  console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"
  