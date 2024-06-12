// Avani Part Start

// Avani Part End



// Shasikant Part Start

//  Shasikant Part End



// Neelesh Part Start

// Neelesh Part End



// Ayush Part Start

    // Create the main section element
    const footerCta = document.createElement('section');
    footerCta.classList.add('footer-cta');
    footerCta.setAttribute('data-track-location', 'Lower Pricing Tiers');
    
    // Create the content div
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('footer-cta__content', 'home-container');
    
    // Create and append the heading
    const heading = document.createElement('h2');
    heading.classList.add('footer-cta__heading', 'home-type-heading');
    heading.textContent = 'Find your next designer today';
    contentDiv.appendChild(heading);
    
    // Create and append the copy div
    const copyDiv1 = document.createElement('div');
    copyDiv1.classList.add('footer-cta__copy');
    copyDiv1.textContent = 'The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.';
    contentDiv.appendChild(copyDiv1);
    
    // Create and append the actions div
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('footer-cta__actions');
    
    // Create and append the first button
    const getStartedButton = document.createElement('a');
    getStartedButton.classList.add('btn1', 'btn1--large');
    getStartedButton.setAttribute('data-track-cta', 'Get started');
    getStartedButton.setAttribute('href', '/signup/new?return_to_after_signup=%2Fget-started%3Fintention%3Dhire%23hiringWorkType');
    getStartedButton.textContent = 'Get started now';
    actionsDiv.appendChild(getStartedButton);
    
    // Create and append the second button
    const learnMoreButton = document.createElement('a');
    learnMoreButton.classList.add('btn2', 'btn2--secondary-alt', 'btn2--large');
    learnMoreButton.setAttribute('data-track-cta', 'Learn about hiring');
    learnMoreButton.setAttribute('href', '/hiring');
    learnMoreButton.textContent = 'Learn about hiring';
    actionsDiv.appendChild(learnMoreButton);
    
    contentDiv.appendChild(actionsDiv);
    
    // Create and append the second copy div
    const copyDiv2 = document.createElement('div');
    copyDiv2.classList.add('footer-cta__copy');
    copyDiv2.textContent = 'Are you a designer? ';
    
    const joinDribbbleLink = document.createElement('a');
    joinDribbbleLink.setAttribute('data-track-cta', 'Join Dribbble');
    joinDribbbleLink.setAttribute('href', '/signup/new');
    joinDribbbleLink.textContent = 'Join Dribbble';
    
    copyDiv2.appendChild(joinDribbbleLink);
    contentDiv.appendChild(copyDiv2);
    
    // Append the content div to the main section
    footerCta.appendChild(contentDiv);
    
    // Append the main section to the specified container in the body
    document.getElementById('footer-cta-container').appendChild(footerCta);
    
    
// Ayush Part End



// Kranti Part Start

// Kranti Part End