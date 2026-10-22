# Reflective Journal
My thoughts and reflections on the bodies of work done in CART 253...

## 2026/10/08 - Website Prototype

I originally joined the class later in the semester, and with the help of my prof, she showed me how to use GitHub Pages, which is something I had never used, so it took some time to acclimate. I find GitHub Pages to be a useful tool, and in the future I would rely on it for portfolio purposes. The linking of pages is similar to using pure html, which came in handy!

The process of creating a repo was easy since I already had prior experience doing so. When creating a repo, I did not use the terminal (git bash) but instead directly through GitHub and with HTTPS. I grappled with the thought of using GitKraken to write my commits instead of GitHub, but I opted for the extension for GitHub directly in VS Code for simplicity. Something I enjoy in life, and when it comes to projects, is organization, so creating all the folders was therapeutic. One for Challenges, Prototypes, and Classwork. 

When choosing visuals for my website, I wanted it to look clean with a flashy banner. I relied on the resources provided in the assignment documentation for its syntax. Although I wish I had leaned more into stylization because the website felt as if it was lacking some personality, especially in font type and color. However, I cannot directly use CSS with markup, which I did attempt earlier.

![pic of website homepage](<images/Screenshot 2026-10-08 223833.png>)  
---

## 2026/10/10 - Representational, Abstract, and Really Weird Prototype 

For " House is home," I created a static image of a house using basic shapes like rectangles and one triangle. By looking up references on p5, I used rectMode(CENTER) for all the rectangles so the new center position of the rectangle was 400,400 when making the windows. When making the roof, I had originally written the wrong points because in my head the triangle was positioned from its center like the rectangles.  I later realized I confused the two when messing around with arbitrary numbers. I like the use of color, and I hope people might recognize it's a nod to “Painted Ladies”. I would further develop it by making window ridges, a more detailed roof, and a door with a doorknob.


For the abstract prototype, I took a more experimental approach, not really 100% knowing which direction I was heading in. With the help of p5 resources, I experimented with geometry. I had prior knowledge of WebGL from around a year ago, so I was a little rusty with the syntax. I was surprised when a third color was added to lerp that it became like an emissive color. Once I decided on a cylinder, I zoomed in the camera position to emulate being trapped in a stained glass illusion. I hope that people have fun playing with the mouse back and forth until they get dizzy, as I have. I would further improve this maybe by incorporating more colors.


Lastly, for the very weird prototype, I immediately thought of adding eyes to the piece. I searched for eye assets on itch and as well as an image with multiple eyes to potentially slice. I went with a sprite sheet and turned it into a gif using bulkpic. I looked at p5 resources to check how to use images or if gifs were supported. I learned how to load images with an async setup. I was surprised that resize changes the image/gif size for every single one. I like how each time you load the project, the eyes size and position are different. I hope people feel uneasy with all the eyeball gifs. I would add different color variations on the eyeballs and eyeballs following the user's cursor.


### Representational

![House](<images/HouseSC.png>)

### Abstract

![Picture of abstract](images/AbstractSC.png)

### Really Weird
![eyeballs everywhere](<images/eyeballSC.png>)

---

## 2026/10/11 - Variable Prototypes


### Variable01

For the bunny prototype, I decided to create a bunny face. The eyes took more finagling, and I learned to create evenly spaced ellipses. I also used stroke and stroke weight for the first time to create leaves. I played with the values to get the desired result. A bad habit I have is adding arbitrary values sometimes for my variables and tweaking them as I go. Alongside, I kept adding additional variables that weren't necessary, making the bunny not move as one and breaking it down into different parts. I hope people find it cute and a little silly. I would attempt turning this into an interactive experience where the bunny chases the carrot using WASD for movement.

![bunny](<images/Screenshot 2026-10-11 221245.png>)




### Variable02

For the heart prototype, I learned how to create a beating heart using p5.  For making the heart shape, I approached it by breaking it down into 3 shapes (2 circles and a triangle). The easy part consisted of changing the heart color. The following step was having it grow as the mouseX and mouseY go towards the bottom of the screen. What surprised me is for growing as the mouse drags that if I didn't include mouseY, the heart would turn upside down because the values of the heart became negative. The hardest part was including a beating heart using frameCount and combining the other effects. I hope people enjoy the meaning of this piece, that love permanently changes you. I would further develop this idea by adding sound effects to the heart and perhaps trying to draw an anatomically accurate heart using shapes.

![heart](<images/Screenshot 2026-10-11 221213.png>)




### Variable03

For "Let me in", I wanted to explore a spookier subject matter. Although the drawing itself is a simple door, doors collectively have so many metaphors, whether it's something we avoid behind a locked door or opening doors and opportunities. I learned to use palette lerp with the help of p5, since from a previous project lerpColor was only able to combine 2 colors. What surprised me was pallette lerp is a very customizable function with time, colors, how long each color can appear for, and looping it with modulo. I hope people get a bit creeped out. I would love to develop this further by adding multiple doors and adding monsters behind some of them, with humans behind others.

![door](<images/Screenshot 2026-10-11 221140.png>)


---

## 2026/10/20 - Conditional Prototypes

### Conditional 01


In this prototype, I explored three random monsters popping up from under the bed. I found it challenging to get all three different types of monsters to pop up. The slime would be the only monster displayed since my code would use the first image of the array. I hope people enjoy the spooky themes and the randomized monsters with different sizes as well! I would further develop fixing after 3 clicks, it resets and you have to click 3 times again to randomize. I would add more monster variations and maybe different places like a desk, drawer, and closet.  

![spooky bed](<images/Screenshot 2026-10-19 020938 (1).png>)



### Conditional 02
For the fish prototype, I was excited to make two fish that swim towards each other when the word love is spelled out. I learned more about taking key types in p5, as some of the syntax was different than my prior knowledge. I learned to use slice, which takes only the last 4 letters the user types. I explored using string in this prototype. I was surprised that when I typed backspace, it would show up as backspace on the screen. I fixed it by adding that it only takes keys that are one character. I hope that users find it cute and charming. I would add that when the fish finally are together, a heart appears and grows. 

![fish in love](<images/Screenshot 2026-10-19 134539.png>)



### Conditional 03
For the rain and grass prototype, I decided to go for a nature theme. I was also reminded of the rainy weather from that week. I learned to make elements such as lines grow and retract in p5. I was surprised that strokeWeight extended between frames, making my rain thicker than intended. I enjoy the rain effect the most, and I hope people find it soothing. To further develop this, I would add sun and clouds that emerge as well in the sky on click. 


![rain](images/Screenshot%202026-10-20%20151336.png)

---
## 2026/10/21 - Event Prototypes

### Event 01

For this prototype, I wanted to explore the musicality of tap shoes and performance. I thought it would be cute if, once you double-clicked on the shoes, you'd be able to see tap shoes dancing across the screen. I used distance here for the first time in my personal prototypes. I used it to calculate how close the click was to the first and second images. I also used imageMode center, which I previously used for rectMode center and ellipseMode center, but learned that it works on images as well. I hope users find the concept fun. I would make the shoes move up and down to make it appear more like tap dancing.

![tap shoes](<images/Screenshot 2026-10-21 223652.png>)



### Event 02

Snake Wonders was inspired by playing snake.io a lot as a child, and I wanted to create a similar visual with circles, except using keyPressed instead of the classic mouse mechanic. I hope it brings out some nostalgia. I learned to use lerp with p5, and it was similar to UE5 but with different syntax. What surprised me is that when drawing out the body, I had to do so from the body to the head. Otherwise, the snake body hid its head. I would further add orbs to pick up that make the user's body grow bigger.

![snake](<images/Screenshot 2026-10-21 215758.png>)



### Event 03

For this prototype, Skeleton Melodies was the one I had the most fun with. When searching for 3 different sound effects that might go together, it was a lot of trial and error. I used the same 120 bpm to test what sounded best altogether. I decided to separate the screen into 3 parts with mouseX to simplify my life and code, which paid off in the end. I experimented with sound using p5's respective resources and loop. I found it surprising that using alpha white with tint didn’t add a white overlay, and nothing changed. I hope people have fun with how the different sounds blend on click. I would add more skeletons and more instrumental sound effects to make a symphony using more events such as mouseWheel or keyPressed.


![skeleton parts](<images/Screenshot 2026-10-21 234542.png>)
---