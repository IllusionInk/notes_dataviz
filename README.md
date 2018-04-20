# A Recurring Wave

[Final data visualization](https://illusionink.github.io/notes_dataviz/)

 > As part of the Information Visualization - 1 module, a 5 week course on data exploration, analysis and visualization at NID; I explored the Indian currency dataset. The aim was to study this dataset, detailing Indian denominations, their share in the economy and respective note numerals. 
 
 > Based on the initial analysis, we had to frame a narrative and design a single page HTML visualisation on the dataset.
 
 
### Initial Explorations
------

 - Intial Charts rendered using Vegalite.
 ![Sketch1](https://github.com/IllusionInk/notes_dataviz/blob/master/assets/charts/denom_event-01.jpg)
 ![Sketch 2](https://github.com/IllusionInk/notes_dataviz/blob/master/assets/charts/denom_history-01.jpg)
 ![Sketch 3](https://github.com/IllusionInk/notes_dataviz/blob/master/assets/charts/dotmap_money.jpg)
 ![Sketch 4](https://github.com/IllusionInk/notes_dataviz/blob/master/assets/charts/note-share.jpg)

### Visualization Concept  - Demonetisation
--- 
Considering the recent demonetisation and its impact on the nation; I decided to understand and depict underlying reasons for the same. In addition to this, I wanted to identify prior landmark events in the life of 500 and 1000 rupee notes.

>A financial phenomenon having occured repeatedly, 'demonetisation' usually leads to disruptions in the daily monetary transactions, similar  to a rising tidal wave. 

#### Questions
- What percentage of the economy did 500 and 1000 rupee notes occupy ?
- Were there any previous demonetisations?  If so, which denominations were affected.

#### Concept Sketches
 - Layout Sketch 
  ![LayoutSketch](https://github.com/IllusionInk/notes_dataviz/blob/master/assets/charts/initial_sketches-03.jpg)

#### Process
 - Explore the dataset and generate charts using Vega Lite 
 - Tweak the chart SVGs in Illustrator & compose them as per the layout
 - Add contextual glyphs, icons and annotations.
 - Generate an HTML page using ai2html in Illustrator.

### Final Visualization
---
**Prior Ripples** -  one of the charts from the [visualization](https://illusionink.github.io/notes_dataviz/)
![Prior Ripples](https://github.com/IllusionInk/notes_dataviz/blob/master/assets/charts/prior%20ripples-04.jpg)


### Tools Used
---

 - **Vegalite** - Javascript Charting library used for generating charts for the visualization.

- **Illustrator** - Tweaking the chart color, glyphs and adding annotations for the final layout.

- **ai2html** (Illustrator Plugin) - Generating the final html page.

### References
---
 - Amit Kapoor’s (*faculty incharge*) [Currency Dataset](https://github.com/amitkaps/visdown/blob/master/data/notes.csv) 
 - [ Primary Source](https://www.rbi.org.in/scripts/PublicationsView.aspx?id=17293)
 - [Indian Demonetization History](https://mostlyeconomics.wordpress.com/2016/11/11/digging-through-india-demonetization-history-12-jan-1946-saturday-and-16-jan-1978-monday/) 

