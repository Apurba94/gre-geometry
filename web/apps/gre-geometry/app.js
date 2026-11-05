/* Geometry Trainer: triangles, circles, polygons and solids with drawn figures. */
(function () {
  'use strict';
  const NAMES = SK.QUANT_TOPICS.geometry.concat(['distance']);
  const RULES = [
    ['Triangle angles', 'Add to 180°.'], ['Polygon angles', 'Interior angles of an n-sided polygon add to (n − 2) × 180°.'],
    ['Right triangles', 'a^{2} + b^{2} = c^{2}. Learn the triples 3-4-5, 5-12-13, 8-15-17, 7-24-25.'], ['Special triangles', '45-45-90 sides x : x : x sqrt{2}. 30-60-90 sides x : x sqrt{3} : 2x.'],
    ['Circles', 'Area πr^{2}, circumference 2πr. A sector is (angle ÷ 360) of the whole.'], ['Solids', 'Box volume lwh. Cylinder volume πr^{2}h.'],
    ['Figures', 'On the GRE, figures are not drawn to scale unless stated. Trust the numbers, not the picture.'],
  ];
  const App = {
    about: 'Geometry questions with a figure for every problem: right triangles, angles, polygons, circles, rectangles and cylinders. Questions are generated from templates, so there is always a new one, and each has a worked solution.',
    how: ['Start a set in **Practice**. Figures are not drawn to scale, as on the GRE.', 'Learn the facts in **Rules**: the GRE does not give you a formula sheet.', 'Practise rules with the Quant Formula Cards app.'],
    tabs: [
      SK.quantTab('practice', 'Practice', NAMES),
      { id: 'rules', label: 'Rules', render(el) { el.appendChild(SK.card('Rules to know', SK.table(['Topic', 'Rule'], RULES.map(([a, b]) => [a, SK.h('span', {}, SK.rich(b))]), false))); } },
    ],
    checks: {
      'every figure question names a figure the kit can draw': (data, assert) => {
        const drawable = ['rightTriangle', 'triangle', 'circle', 'rect', 'plane', 'venn', 'bars'];
        for (let s = 1; s < 40; s++) for (const q of SK.makeQuant(NAMES, 12, s)) {
          assert.deepEqual(SK.validateItem(q), []);
          if (q.figure) assert.ok(drawable.includes(q.figure.kind), q.figure.kind);
        }
      },
    },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
