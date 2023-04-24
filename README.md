# etch-a-sketch

This is another project focusing on DOM manipulation skills. The goal is to build a browser version of something between a sketchpad and an etch-a-sketch. This used CSS grid which the Odin Project course hasn't covered at all yet, and basically said "make a grid, good luck". Despite that I did my best.

I originally created my grid using :root and --grid-rows/columns in CSS. For some reason this wouldn't let me color grid squares directly under the mouse cursor when clicking and dragging. Removing :root and grid-template-rows: repeat(var(--grid-rows), 1fr) and the columns version, removing the set property with these CSS values in javascript, and changing how the grid is made in javascript somehow lets the cursor properly fill in squares directly under the mouse instead of "skipping" that square on initial click. I'm noting this to investigate later, perhaps when learning more about CSS grid.
