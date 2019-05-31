import 'reset-css'
import './style/main.css'

import * as d3 from 'd3'

d3.select('svg')
    .style('display', 'inherit')

d3.select('#title').selectAll('path')
    .attr('transform', (d, i) => `translate(${(i%3) ? -30 : 30},${(i%2) ? -30 : 30})`)
    .transition()
    .delay((d, i) => i * 100)
    .duration(1000)
    .ease(d3.easeBounceOut)
    .attr('transform', 'translate(0,0)')