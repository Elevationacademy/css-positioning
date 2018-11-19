# Intro

So far, we've covered pretty basic HTML and CSS.  
It wasn't the prettiest, but we're not shallow.  
Today we will learn about the **box model** and start moving elements around the page using the following CSS properties:

*   margin
*   padding
*   position

*   relative
*   absolute

*   left, top, right, bottom

You'll be playing around with a lot of HTML/CSS.

*   You **must** try all the things in this lesson, otherwise it will be useless and boring to you
*   If you want to keep some code but not delete it, you can **comment** it out

*   In VSCode, highlight the line(s) you want to comment out and press `Ctrl+/` (that's a slash) - this will wrap your code in a comment and prevent it from being read by the browser.

# Margin

Let's start with a simple `div`. Create one (remember, HTML goes in the `index.html` file and CSS in the `style.css` file), and give it a width and height of 100px, and a background color of red.  
Quick refresher if you're mind has slipped:

**index.html**:

```javascript
<div id="example"></div>
```

**style.css**

```css
#example{
  width: 100px;
  height: 100px;
  background-color: red;
}
```

Now say I want to move this div to the right. What I can do is add the CSS property `margin-left`, like this:

```css
margin-left: 100px;
```

If I'm moving it _right_ why do I want margin-_left_? Because I'm pushing it 100px _away_ from the left.  
Test it out and see the result.

Now use `margin` to push it _down_ (the opposite of down in CSS is `top`) 100px. D'you get it?

```javascript
margin-top: 100px;
```

You can explore the others (`margin-right`, `margin-bottom`) - but you'll note that if you only have one div on the page, those properties won't affect it because **by default, `div`s are positioned as top and left as possible** - of course, these properties will come in handy later when we have more than just one element

Note: if you want to push your div from all sides at once, you can just do `margin: 100px`. Try it out and see what happens.

## More Than One Element

Just one div is not very interesting, so let's play with two for a second.
Add another `div`, again with 100px for width and height, and give this one a background color of blue.
Reset any margin settings you have. You should see this:

![](https://s3-us-west-2.amazonaws.com/learn-app/twodivsstacked.PNG)

Now play around with the `margin` properties you know and watch how the `divs` move around. What have you learned?

# Padding

Padding is pretty similar to `margin`, but instead of making the outside push the `div` in certain directions, it pushes the `div` _outside_.  
To understand what this means, experiment for yourself.

If you get it, you should be able to create the following with **only** two `div`s that have a height and width of 100px, and play with the padding:

![](https://s3-us-west-2.amazonaws.com/learn-app/twodivsstackedpaddingex.PNG)

To be clear, create the above **without** changing the `width` or `height` properties of the `div`s

# The Box Model

We know enough now to talk about the Box Model. To understand this, you must first accept the following boggling statement:

_There is more to an element on the page than the element on the page._

And we can explain that visually. Say I have my good old red box, with a `width` and `height` of 100px. Create such an element.  
Now right-click the box and select "Inspect". You should see Chrome's developer tools pop up, and there you'll see the HTML that the browser has available:

![](https://s3-us-west-2.amazonaws.com/learn-app/lesson-images/DevTools.PNG)

You should be on the **Elements** tab, and in the smaller window you should be on the **Styles** tab. Scroll down the little window until you see this:

![](https://s3-us-west-2.amazonaws.com/learn-app/lesson-images/BoxModelPlain.PNG)

This is the CSS **box model**. What we're seeing here is how the element looks on the page. Right now it's pretty stark - naturally, because we haven't done much.  
Notice the 100 x 100 in the middle? Yup, those are the dimensions we gave our element!

##### Note: the box model will _always show dimensions in pixels_, even if you use percents or other units

Ok so the above doesn't tell us much we don't know. But let's add a `margin-top` of 100px as well and see what that does:

![](https://s3-us-west-2.amazonaws.com/learn-app/lesson-images/BoxModelMargin.PNG)

There it is, our box model keeping exact track of the positioning of our element. Of course, you should have seen your element move as well. Now what if we add just `padding: 20px` ?

![](https://s3-us-west-2.amazonaws.com/learn-app/lesson-images/BoxModelMarginAndPadding.PNG)

Yessir, all around. Just as we would expect. But the really fun part is when you **hover your mouse** over any of the box model's sections.

When you hover over the innermost part, you'll see your div get highlighted on the page - this is _great_ for locating elements when you've got a bunch on the page.  
  
When you hover over the margin section, you'll see exactly what the browser is doing with that 100px - the "push", so to speak. You'll _also_ see that the margin highlight extends all the way to the right-most part of the page - why? Because this `div` is a **block** element! Bam.

So whenever things start disappearing or they don't look the way you expect - inspect them and look at their box model, that should give you some headway about how to start fixing.

Btw, what happens when you hover on the padding section?

You should see the 20px all around that are padding the element. That's what we mean by the `div` being pushed "outside" beyond its original 100 x 100 dimensions.

# Position

The `position` property really is the basics of moving things around correctly in CSS. Using `margin` and `padding` alone is not very useful or scaleable. But first, we need to talk about parents and children.

## Parents, Children

We've seen this briefly before, but let's talk about the concept of parents and children.

```javascript
<div id="parent">
  <div id="child1"></div>
  <div id="child2"></div>  
</div>
```

The outer `div` _wraps_ the two inner `div`s, and so we say that the outside `div` is the **parent** of the inner ones. The inner `div`s are its **children**, and also **siblings** of one another.  
Note: we do **not** have to give parents/children any `id` or `class` to create this relationship. The above example is just for clarity, and will help us with our CSS.

So create the above layout, give the parent a width+height of 300px, the children 100px each, and give all three different background colors (parent: red, child1: blue, child2: green).
Here's mine:

![](https://s3-us-west-2.amazonaws.com/learn-app/pfnp/parent-children-start.PNG)

Notice that now the two children are inside the parent, where as usually we saw that `div`s push each other down.
This is happening because when we have this parent-child relationship, the parent becomes a (kind of) frame of reference for the children.
So for now, the children see the parent as the parent sees the entire browser (i.e what we've seen up to now)

Play around with the `margin` and `padding` properties that you know, and see what happens. In particular, you should note that:

*   `margin-top` will push the parent div down instead of the child div
*   `padding` the children `div`s will cause them to overflow if you give them dimensions bigger than the parent
*   `padding` the parent makes it expand and "pushes" its children inwards
*   Adding a `margin` to the parent makes the whole container move

If you haven't experienced all of those (I would call them _problems_), then you haven't played enough. Play some more!

The first step to solving these problems is to remove the dimensions from the parents.  
In general, when we're building websites **we want to allow room for dynamic content**  
This means that we generally don't want to limit our elements (divs, etc) to particular dimensions, _especially_ elements that contain children.

For starters, then, reset your code to only have the parent and its two children, each with their own color. **Remove the dimensions** from the parent.  
You should see this:

![](https://s3-us-west-2.amazonaws.com/learn-app/pfnp/parent-children-no-p-dimensions.PNG)

Woops. If you remember the distinction between `block` and `inline` elements - what's happening should be clear.  
The parent element is a `div`, which is a `block` element, and so takes up the entire width of the page by default. Since we didn't specify any width, it took up 100% of the width.  
But we just said we don't want to specify width to allow for dynamic content sizing. Solution? Add this to your parent's CSS:

```javascript
display: inline-block;
```

And now! It's gone o_o
But that's only because inline elements take up only as much space as they need, which in this case the exactly the dimensions of its children.
So now, add the following to your parent:

```javascript
padding: 10px;
```

And voila! Now you have your dynamic parent that resizes according to the content inside.  
Play around with the **children**'s padding, width, height (and margin, to an extent) - see what happens - no more overflowing content!

However, sometimes we _do_ want to limit the parent's dimension - at least its width, because we want it to share the space with other elements. Here's where we start talking about `relative` and `absolute` positioning

## Relative Positioning

Reset the code (or open a new file, or comment out your code, up to you) to the parent (width+height: 300px, red) and its children (width+height: 100px, blue, green)

Now add this to the first child:

```javascript
position: relative;
```

Alone, this doesn't do anything, but what it does is allow us to now use other properties. In particular, `left`, `right`, `top`, `bottom` - note that these are **different** from `margin-top` etc

Give 200px to the first child's `top` and `left` property - see what happens?

![](https://s3-us-west-2.amazonaws.com/learn-app/pfnp/basicrelativetopleft.PNG)

Notice that this time the parent and the second child were not affected at all - only the first child was moved according to the specific instructions we gave it.  
Now **that's** power

Effectively, what is happening is that `relative` says to the element: "act as you should act, given your frame of reference (the parent) and the commands you've been given (top, left, etc)". Really "relative" means relative to _itself_

In case you want to validate your code, here's what my CSS looks like for the above image:

**CSS**:

```javascript
#parent{
  background-color: red;
  width: 300px;
  height: 300px;
}

.child{
  width: 100px;
  height: 100px;
}

#child1{
  position: relative;
  top: 200px;
  left: 200px;
  background-color: blue;
}

#child2{
  background-color: green;
}
```

**HTML**:
```javascript
<div id="parent">
  <div id="child1" class="child"></div>
  <div id="child2" class="child"></div>  
</div>
```

## Absolute Positioning

This is important regarding absolute positioning:  
  
**Absolute positioning only works if the element's parent is non-static**

What is static? `position:static` is the default position for any element. (you don't have to define it)  
Thus, if you are going to position anything as `absolute` you must first change its **parent** to either `position: relative` or `position: absolute`

So if this is your child:

```javascript
#child{
  width: 50px; 
  height: 50px;
  position: absolute;
}
```

Here are your options for the parent:

```javascript
/* NO */
#parent{
  width: 100px;
  height: 100px;
  background-color: red;
}

/* Yes */
#parent{
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
}

/* Yes */
#parent{
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
}
```

Now that that's clear...

Let's see what happens when we give a child element an absolute position. Use the same initial setup from before (parent, two children), but now change the blue child's position to `absolute` (remember to remove any other top/bottom stuff you had)

Hopa! The green child disappeared. Or did it?
Sounds like a good time to open up the developer tools! (right-click on the page, Inspect)

![](https://s3-us-west-2.amazonaws.com/learn-app/pfnp/devtools.PNG)

As you can see, the second child is still there, but we aren't seeing it. This is because - and this is important:  
**Absolute elements are taken out of the normal flow of the elements on the page**

Remember that the general flow for **block** elements is to take up the whole row. Any block element added after will appear after (below) the first one, because there's "no space" there.

But _absolute elements_ don't adhere to this flow. They ignore it, and just are where they are. This gives us 100% control of every pixel of movement for that element, but it also means that - and this is also important - **other elements ignore absolute elements**

Because the second child (the green one) is ignoring the first child, it goes to where it would go if the first child didn't exist - **as top left as possible** - and thus ends up behind the first child, making it "disappear" as far as we're concerned.

So what's the added value of `absolute` elements? Add `right: 0` to the first child and see what happens.

Snap. The second child is up left, and the first child is up-right, 0 pixels away from the edge of its parent.
Remember, children still work in the frame of reference of their parents.

So now, using absolute positioning, see if you can create this:

![](https://s3-us-west-2.amazonaws.com/learn-app/pfnp/absolutepractice.PNG)

If you've tried for at least 8 minutes, check out the solution below - though you should first ask the other students/instructor to understand the concept.

**CSS**:

```javascript
#parent{
  background-color: red;
  width: 300px;
  height: 300px;
  position: relative;
}

.child{
  width: 100px;
  height: 100px;
  position: absolute;
}

#child1{
  background-color: blue;
}

#child2{
  right: 0;
  background-color: green;
}

#child3{
  bottom: 0;
  background-color: gold;
}

#child4{
  bottom: 0;
  right: 0;
  background-color: purple;
}
```

**HTML**:
```javascript
<div id="parent">
  <div id="child1" class="child"></div>
  <div id="child2" class="child"></div>
  <div id="child3" class="child"></div>
  <div id="child4" class="child"></div>
</div>
```

What you'll notice - and this is one of the great things about `absolute` positioning - if we change the dimensions of the parent element, all the children will stay in their respective edges. Try it out and see.

If the above was too easy, trying replicating the following image.
**Hint**: there's a bit of a math trick here.

![](https://s3-us-west-2.amazonaws.com/learn-app/pfnp/absolutechallengewithtrick.PNG)