module.exports = {
  nets: {
    from: 'from',
    to: 'to',
    gnd: undefined
  },
  params: {
    class: 'T',
    reverse: false
  },
  body: p => {
    const standard = `
      (module Button_Switch_SMD:SW_SPDT_PCM12 (layer F.Cu) (tedit 5A02FC95)
        ${p.at /* parametric position */}
        (descr "Ultraminiature Surface Mount Slide Switch, right-angle, https://www.ckswitches.com/media/1424/pcm.pdf")
        (attr smd)
        (fp_line (start -4.4 2.1) (end -4.4 -2.45) (layer F.CrtYd) (width 0.05))
        (fp_line (start -1.65 2.1) (end -4.4 2.1) (layer F.CrtYd) (width 0.05))
        (fp_line (start -1.65 3.4) (end -1.65 2.1) (layer F.CrtYd) (width 0.05))
        (fp_line (start 1.65 3.4) (end -1.65 3.4) (layer F.CrtYd) (width 0.05))
        (fp_line (start 1.65 2.1) (end 1.65 3.4) (layer F.CrtYd) (width 0.05))
        (fp_line (start 4.4 2.1) (end 1.65 2.1) (layer F.CrtYd) (width 0.05))
        (fp_line (start 4.4 -2.45) (end 4.4 2.1) (layer F.CrtYd) (width 0.05))
        (fp_line (start -4.4 -2.45) (end 4.4 -2.45) (layer F.CrtYd) (width 0.05))
        (fp_line (start 3.35 -1) (end -3.35 -1) (layer F.Fab) (width 0.1))
        (fp_line (start 3.35 1.6) (end 3.35 -1) (layer F.Fab) (width 0.1))
        (fp_line (start -3.35 1.6) (end 3.35 1.6) (layer F.Fab) (width 0.1))
        (fp_line (start -3.35 -1) (end -3.35 1.6) (layer F.Fab) (width 0.1))
        (fp_line (start -0.1 2.9) (end -0.1 1.6) (layer F.Fab) (width 0.1))
        (fp_line (start -0.15 2.95) (end -0.1 2.9) (layer F.Fab) (width 0.1))
        (fp_line (start -0.35 3.15) (end -0.15 2.95) (layer F.Fab) (width 0.1))
        (fp_line (start -1.2 3.15) (end -0.35 3.15) (layer F.Fab) (width 0.1))
        (fp_line (start -1.4 2.95) (end -1.2 3.15) (layer F.Fab) (width 0.1))
        (fp_line (start -1.4 1.65) (end -1.4 2.95) (layer F.Fab) (width 0.1))
        (fp_text user %R (at 0 -3.2) (layer F.Fab)
          (effects (font (size 1 1) (thickness 0.15)))
        )
    `

    function pins(def_neg, def_pos, def_side) {
      return `
        ${''/* pins */}
        (pad "" np_thru_hole circle (at -1.5 0.33) (size 0.9 0.9) (drill 0.9) (layers *.Cu *.Mask))
        (pad "" np_thru_hole circle (at 1.5 0.33) (size 0.9 0.9) (drill 0.9) (layers *.Cu *.Mask))

        ${''/* front */}
        (pad 1 smd rect (at -2.25 -1.43 ${p.rot}) (size 0.7 1.5) (layers F.Cu F.Paste F.Mask))
        (pad 2 smd rect (at  0.75 -1.43 ${p.rot}) (size 0.7 1.5) (layers F.Cu F.Paste F.Mask) ${p.net.from.str})
        (pad 3 smd rect (at  2.25 -1.43 ${p.rot}) (size 0.7 1.5) (layers F.Cu F.Paste F.Mask) ${p.net.to.str})

        (pad 4 smd rect (at -3.65  1.43 ${p.rot}) (size 1 0.8) (layers F.Cu F.Paste F.Mask) ${p.net.gnd.str})
        (pad 4 smd rect (at  3.65  1.43 ${p.rot}) (size 1 0.8) (layers F.Cu F.Paste F.Mask) ${p.net.gnd.str})
        (pad 4 smd rect (at -3.65 -0.78 ${p.rot}) (size 1 0.8) (layers F.Cu F.Paste F.Mask) ${p.net.gnd.str})
        (pad 4 smd rect (at  3.65 -0.78 ${p.rot}) (size 1 0.8) (layers F.Cu F.Paste F.Mask) ${p.net.gnd.str})

        ${''/* back */}
        (pad 1 smd rect (at  2.25 -1.43 ${p.rot}) (size 0.7 1.5) (layers B.Cu B.Paste B.Mask) ${p.net.to.str})
        (pad 2 smd rect (at -0.75 -1.43 ${p.rot}) (size 0.7 1.5) (layers B.Cu B.Paste B.Mask) ${p.net.from.str})
        (pad 3 smd rect (at -2.25 -1.43 ${p.rot}) (size 0.7 1.5) (layers B.Cu B.Paste B.Mask) )

        (pad 4 smd rect (at -3.65  1.43 ${p.rot}) (size 1 0.8) (layers B.Cu B.Paste B.Mask) ${p.net.gnd.str})
        (pad 4 smd rect (at  3.65  1.43 ${p.rot}) (size 1 0.8) (layers B.Cu B.Paste B.Mask) ${p.net.gnd.str})
        (pad 4 smd rect (at -3.65 -0.78 ${p.rot}) (size 1 0.8) (layers B.Cu B.Paste B.Mask) ${p.net.gnd.str})
        (pad 4 smd rect (at  3.65 -0.78 ${p.rot}) (size 1 0.8) (layers B.Cu B.Paste B.Mask) ${p.net.gnd.str})
      `
    }

    return `
      ${standard}
      ${pins('-', '', 'F')}
      )
    `
  }
}
