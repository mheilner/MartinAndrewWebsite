# startup
This is my startup repository

I am making this modification for my github hw assignments

This is a change that I am making to the Readme in github as part 6

how about I try and make this change in the env

GitHUB HW 1/24/2023
I am really excited about this HW because many times have I worked on github but not fully understood it. I loved learning these skills because I think now I will be able to take what I learned and apply it to all the things that I use especially this project. I think it is interesting how it is most efficient to clone the repositories so they are linked well. Before, I just would make commits without the cloned repo and it was fine but this is much more efficient.

Startup Design 1/26/2023
Do you ever feel overwhelmed with the prospect of careers and what follows an already stressful set of years making up your undergrad? We all hear that opportunities abound, but where do you even start? Martin Andrew & Co is your launch pad for a career into carving out the career of you are seeking. Our firm offers educational and informational services to students and career changers.  Our services focus on career development and career ideation esecially in the fields of finance and technology. With our help, you can move forward with confidence in your career.

<img width="575" alt="image" src="https://user-images.githubusercontent.com/108209902/214958252-05dfde9a-d042-4ee8-afa1-381231d971ff.png">


Key Features
-Section for submission of articles/blog/postd from people with industry experience and skill
-Interviews/Podcasts with similar individuals
-platform for skill assistance with mentors 
-multiple page interface

AWS EC2
Server IP: http://18.224.198.116/
I have a pem file with this
Here is the ssh command: --  ssh -i C:\Users\markh\Downloads\[pem] ubuntu@[ip]

AWS Route 53
http://martinandrew.org
This is the DNS used for my IP above. I thought it was really interesting being able to map the subdomains to the website. It makes sense that there are many user errors and being able to adapt the route 53 to compensate for this with subdomains makes it ver helpful. I am excited to keep learning more about this.

HTTPS/Web Certificates HW
For this assignment, we had to update the website security by chaning the vim caddyfile in the ssh to the website domainname - martinandrew.org. This secures the network. I was shocked that this was so expensive before 2014 for even the smaller companies. I think this is a cool thing that it is much more accessible the website security.

HMTL Links:
Intro: https://codepen.io/mheilner/pen/ZEjPjMV This is my codepen fork that I made for this assignment.
https://github.com/webprogramming260/.github/blob/main/profile/html/introduction/introduction.md
That is the link to the HTML intro. It explores a couple of the essential basic points of HTML and how to use it for the best experieence.
HTML Structure
https://www.w3schools.com/html/html_blocks.asp (good info for understanding the tags)
https://codepen.io/mheilner/pen/JjBzBzo
HTML input
https://github.com/webprogramming260/.github/blob/main/profile/html/input/input.md
This is info for input
HTML Media
https://github.com/webprogramming260/.github/blob/main/profile/html/media/media.md


SIMON HTML - simon.martinandrew.org
So this was a really great learning experience for the fact that I had issues is my Caddfile in the AWS terminal. I hadn't changed over the name for my subdomain so it made it kind of challenging for me to find out how to get my simon.domain to go live. I think that the most important part of this assignment was learning that. Aside from that I would say that learning all the new tag names was helpful

CSS PRACTICE
https://codepen.io/mheilner/pen/GRXRKoq?editors=1100
This assignment was cool because it brought to life what webdev can do. I think that animation makes things so much more interesting when interacting with a website so this will be awesome to use for a website.



STARTUP PROJECT 2/24
https://getbootstrap.com/
DEPLOY ISSUE
I was having trouble running the deployFile.sh but it was because I had to change the permissions - chmod 777 deploy...

What I learned: it is super useful to understand how to work with CSS and HTML and using some bootstrap. I think the best thing that I learned was that you can make sub-tags within sections that you make. For example you can have a p tag be different depending on the main section. That is cool.
PERMISSIONS
-changed the permissions to more private and the ~/.ssh is where the pem is

Codepen JS Regex 2/24
I liked this assignment. Regex is something that can be very useful and it is helpful to know all about the use of regex and JS.
https://codepen.io/mheilner/pen/vYzgLpw
https://codepen.io/mheilner/pen/yLxgeMM

JS DOM
https://codepen.io/mheilner/pen/gOdgrBx
This was a fun assignment because this really started to show how you can use JS for HTML and CSS. Hopefully, we can do more.
JS Promises
This is one of the more confusing things that we have learned. I hope we can learn a bit more of the specifics of making this useful. I think the cool thing is the race function that pits multiple promises against eachother.

Async Await
This one is more confusing for me. Interesting to see when the asynchronous functions are going to be used.

Simon JS 
-Integrating the document control from JS to html is very interesting. 
-Need to have a source to the JS document to be able to reference the code in HTML 
-No major effects on the CSS. Really JS mostly interacts in this project with HTML


Javascript Deliberable
-Adding the Javascript into the page added much more flow
-Interactive Calendar. using a javascript base to be able to scroll and visualize what will happen overtime.
-Using JS, PHP, HTML to add a place to send the emails that are subsribed for the email list newsletter


Simon Service 3/22:
-This changes the front end web to a more backend server that logs the data
-Create an index.js that can load the data that is needed - in this case the score data
-TDD is effective with this becuase it allows for the use of testing that doesnt need a browser. Now that we have a server set up we can utilize this more easily.
PM2 allows the server to keep running even when the browser terminates.


Simon DB and Mongo
-This is cool. The simon db helps us create a place for storage of the data on the websites
-in the case of simon this is the highest score so when the server refreshes we still have the call to the highest data.
-the mongo credentials are secret and shouldnt be given away simply. 

Simon Login
- Run npm init -y to initial the project to work with node.js.
- Run npm install express cookie-parser mongodb uuid bcrypt to install all of the packages we are going to use.
- Run node main.js or press F5 in VS Code to start up the web service.

- This offers a strong encryoption on the login for the simon. Actively stored with MONGo


Simon Websocket
- This is kind of unrelated to the websocket but I am adding it because I had the issues here. I accidentally saved my credentials for the mono db directly into the code without using the ssh so I fixed that with these steps - Save in the etc/env the creds then run - pm2 restart all --update-env
pm2 save in the terminal to get the domain to reference it.

- This is really cool becuase it allows for the people server and client to work peer to peer. 

- run npm install ws to let the websocket work. The code in the peer.js in the simon explains the code.

UPDATES to WEBSOCKET
- You need to upadate the enviroment variables in the ~/.zshrc file locally to debug. That was my issue
