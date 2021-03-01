# Dominion Energy Mockup
Link to my project: https://dominion-energy-mock-site.netlify.app/

## Table of contents
* [General info](#general-info)
* [Resources and Technologies Used](#resources-and-technologies-used)
* [Setup](#setup)
* [Approach](#approach)

## General info
This project is a mockup created using static images of a website at different viewpoints (mobile, tablet, and desktop)
	
## Resources and Technologies Used

* Design Comps from UX Designer
* <a href="https://fontawesome.com/">Font Awesome</a>
* <a href="https://www.pexels.com/">Pexels</a>
* <a href="https://fonts.google.com/specimen/Lora?category=Serif&preview.text=Watch%20the%20Weather&preview.text_type=custom&sidebar.open=true&selection.family=Lora">Google Font Lora</a>
* <a href="https://getbootstrap.com/docs/4.5/getting-started/introduction/">Bootstrap 4</a>
* <a href="https://code.jquery.com/">jQuery</a>
* HTML, CSS, and JavaScript
	
## Setup
After forking my project, and running it locally, you may not see the Font Awesome icons due to Font Awesome requiring users to create personal kits.  Create your kit <a href="https://fontawesome.com/start">here</a> and replace the link in the head with your personal link.

##Approach
After examining the design comps I was given, I decided that I would use Bootstrap for this project.  I needed to make sure that the page was dynamic and responsive, and I find that Bootstrap is a great way to organize the content into responsive blocks.

I also decided to tackle this project with a "Mobile First Approach".  I find that this approach works well because I could start with a design that was responsive on both mobile and tablet views, and work up from there.

This first big challenge I faced was the fact that the desktop navbar was very different from the mobile/tablet version.  I opted to create two different navbars that hide at certain breakpoints and display in others.  This allowed for a seamless transition between the two states.

I also faced the same challenge with the footer.  Here, I was able to implement two versions as well as write some JavaScript to hide links on the mobile version until the user chooses to display them.



