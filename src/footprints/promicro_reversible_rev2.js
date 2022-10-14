// Arduino ProMicro atmega32u4au
//  Take care to bridge the pads on the correct side of the pcb
//    To orient the MCU up, meaning power led faces away from pcb, bridge the pads on the side of the pcb with the MCU
//    To orient the MCU down, meaning power led faces the pcb, bridge the pads on the opposite side of the pcb

module.exports = {
  nets: {
    RAW: 'RAW',
    GND: 'GND',
    RST: 'RST',
    VCC: 'VCC',
    P21: 'P21',
    P20: 'P20',
    P19: 'P19',
    P18: 'P18',
    P15: 'P15',
    P14: 'P14',
    P16: 'P16',
    P10: 'P10',
    P1: 'P1',
    P0: 'P0',
    P2: 'P2',
    P3: 'P3',
    P4: 'P4',
    P5: 'P5',
    P6: 'P6',
    P7: 'P7',
    P8: 'P8',
    P9: 'P9',
  },
  params: {
    class: 'MCU',
  },
  body: p => {
    return `
    (module ProMicro (layer F.Cu) (tedit 6135B927)
      ${p.at /* parametric position */}

    ${'' /* footprint description, tags and reference */}
    (descr "Solder-jumper reversible Pro Micro footprint")
    (tags "promicro ProMicro reversible solder jumper")
    (fp_text reference "${p.ref}" (at -16.256 -0.254 ${p.rot + 90}) (layer F.SilkS) ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )


    ${''/* through holes */}
    (pad "" thru_hole circle (at -13.97  7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) (zone_connect 0))
    (pad "" thru_hole circle (at -11.43  7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at  -8.89  7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at  -6.35  7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))

    (pad  5 thru_hole circle (at  -3.81  7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P2.str})
    (pad  6 thru_hole circle (at  -1.27  7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P3.str})
    (pad  7 thru_hole circle (at   1.27  7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P4.str})
    (pad  8 thru_hole circle (at   3.81  7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P5.str})
    (pad  9 thru_hole circle (at   6.35  7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P6.str})
    (pad 10 thru_hole circle (at   8.89  7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P7.str})
    (pad 11 thru_hole circle (at  11.43  7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P8.str})
    (pad 12 thru_hole circle (at  13.97  7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P9.str})

    (pad "" thru_hole circle (at -13.97 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at -11.43 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at  -8.89 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))
    (pad "" thru_hole circle (at  -6.35 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))

    (pad 20 thru_hole circle (at  -3.81 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P21.str})
    (pad 19 thru_hole circle (at  -1.27 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P20.str})
    (pad 18 thru_hole circle (at   1.27 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P19.str})
    (pad 17 thru_hole circle (at   3.81 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P18.str})
    (pad 16 thru_hole circle (at   6.35 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P15.str})
    (pad 15 thru_hole circle (at   8.89 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P14.str})
    (pad 14 thru_hole circle (at  11.43 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P16.str})
    (pad 13 thru_hole circle (at  13.97 -7.62) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask) ${p.net.P10.str})



    ${''/* extra border around "RAW", in case the rectangular shape is not distinctive enough */}
    (fp_line (start -15.24  6.35) (end -12.7   6.35) (layer F.SilkS) (width 0.15))
    (fp_line (start -15.24  6.35) (end -15.24  8.89) (layer F.SilkS) (width 0.15))
    (fp_line (start -12.7   6.35) (end -12.7   8.89) (layer F.SilkS) (width 0.15))
    (fp_line (start -12.7   8.89) (end -15.24  8.89) (layer F.SilkS) (width 0.15))
    (fp_line (start -15.24 -6.35) (end -12.7  -6.35) (layer B.SilkS) (width 0.15))
    (fp_line (start -15.24 -6.35) (end -15.24 -8.89) (layer B.SilkS) (width 0.15))
    (fp_line (start -12.7  -6.35) (end -12.7  -8.89) (layer B.SilkS) (width 0.15))
    (fp_line (start -12.7  -8.89) (end -15.24 -8.89) (layer B.SilkS) (width 0.15))

    ${''/* illustration of the (possible) USB port overhang */}
    (fp_line (start -19.304 -3.81) (end -14.224 -3.81) (layer Dwgs.User) (width 0.15))
    (fp_line (start -19.304  3.81) (end -19.304 -3.81) (layer Dwgs.User) (width 0.15))
    (fp_line (start -14.224  3.81) (end -19.304  3.81) (layer Dwgs.User) (width 0.15))
    (fp_line (start -14.224 -3.81) (end -14.224  3.81) (layer Dwgs.User) (width 0.15))


    ${''/* void mask of central vias */}
    (fp_circle (center  -6.35  0.762) (end  -6.225  0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center  -6.35  0.762) (end  -6.225  0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center  -6.35 -0.762) (end  -6.225 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center  -6.35 -0.762) (end  -6.225 -0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center  -8.89  0.762) (end  -8.765  0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center  -8.89  0.762) (end  -8.765  0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center  -8.89 -0.762) (end  -8.765 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center  -8.89 -0.762) (end  -8.765 -0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -11.43 -0.762) (end -11.305 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -11.43 -0.762) (end -11.305 -0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -11.43  0.762) (end -11.305  0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -11.43  0.762) (end -11.305  0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -13.97  0.762) (end -13.845  0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -13.97  0.762) (end -13.845  0.762) (layer F.Mask) (width 0.25))
    (fp_circle (center -13.97 -0.762) (end -13.845 -0.762) (layer B.Mask) (width 0.25))
    (fp_circle (center -13.97 -0.762) (end -13.845 -0.762) (layer F.Mask) (width 0.25))


    ${''/* avoid mask for the bridges */}

    (fp_poly (pts (xy -13.462 -5.08) (xy -14.478 -5.08) (xy -14.478 -6.096) (xy -13.462 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -10.922 -5.08) (xy -11.938 -5.08) (xy -11.938 -6.096) (xy -10.922 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy  -8.382 -5.08) (xy  -9.398 -5.08) (xy  -9.398 -6.096) (xy  -8.382 -6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy  -5.842 -5.08) (xy  -6.858 -5.08) (xy  -6.858 -6.096) (xy  -5.842 -6.096)) (layer B.Mask) (width 0.1))

    (fp_poly (pts (xy -13.462 -5.08) (xy -14.478 -5.08) (xy -14.478 -6.096) (xy -13.462 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy -10.922 -5.08) (xy -11.938 -5.08) (xy -11.938 -6.096) (xy -10.922 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy  -8.382 -5.08) (xy  -9.398 -5.08) (xy  -9.398 -6.096) (xy  -8.382 -6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy  -5.842 -5.08) (xy  -6.858 -5.08) (xy  -6.858 -6.096) (xy  -5.842 -6.096)) (layer F.Mask) (width 0.1))

    (fp_poly (pts (xy -14.478  5.08) (xy -13.462  5.08) (xy -13.462  6.096) (xy -14.478  6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy -11.938  5.08) (xy -10.922  5.08) (xy -10.922  6.096) (xy -11.938  6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy  -9.398  5.08) (xy  -8.382  5.08) (xy  -8.382  6.096) (xy  -9.398  6.096)) (layer B.Mask) (width 0.1))
    (fp_poly (pts (xy  -6.858  5.08) (xy  -5.842  5.08) (xy  -5.842  6.096) (xy  -6.858  6.096)) (layer B.Mask) (width 0.1))

    (fp_poly (pts (xy -14.478  5.08) (xy -13.462  5.08) (xy -13.462  6.096) (xy -14.478  6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy -11.938  5.08) (xy -10.922  5.08) (xy -10.922  6.096) (xy -11.938  6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy  -9.398  5.08) (xy  -8.382  5.08) (xy  -8.382  6.096) (xy  -9.398  6.096)) (layer F.Mask) (width 0.1))
    (fp_poly (pts (xy  -6.858  5.08) (xy  -5.842  5.08) (xy  -5.842  6.096) (xy  -6.858  6.096)) (layer F.Mask) (width 0.1))





    (pad 2 smd custom (at -11.43 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ) ${p.net.GND.str})















    (pad 24 smd custom (at -13.97 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu F.Mask) ${p.net.P1.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -13.97 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -13.97 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )




    (pad 23 smd custom (at -11.43 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu F.Mask) ${p.net.P0.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -11.43 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -11.43 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )



    (pad 22 smd custom (at -8.89 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu F.Mask) ${p.net.GND.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -8.89 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -8.89 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )







    (pad 21 smd custom (at -6.35 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers B.Cu F.Mask) ${p.net.GND.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -6.35 6.35 ${p.rot + 180}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -6.35 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers B.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )






    (pad 1 smd custom (at -13.97 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu F.Mask) ${p.net.RAW.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -13.97 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -13.97 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )



    (pad 3 smd custom (at -8.89 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu F.Mask) ${p.net.RST.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -8.89 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -8.89 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )


    (pad 2 smd custom (at -11.43 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu F.Mask) ${p.net.GND.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -11.43 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -11.43 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )


    (pad 4 smd custom (at -6.35 -4.826 ${p.rot}) (size 1.2 0.5) (layers B.Cu F.Mask) ${p.net.VCC.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -6.35 -5.842 ${p.rot}) (size 0.1 0.1) (layers B.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )
    (pad "" smd custom (at -6.35 -6.35 ${p.rot}) (size 0.25 1) (layers B.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )




    (pad 1 smd custom (at -13.97 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu B.Mask) ${p.net.RAW.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -13.97 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -13.97 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )

    (pad 2 smd custom (at -11.43 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu B.Mask) ${p.net.GND.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -11.43 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -11.43 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )

    (pad 3 smd custom (at -8.89 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu B.Mask) ${p.net.RST.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -8.89 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -8.89 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )

    (pad 4 smd custom (at -6.35 4.826 ${p.rot + 180}) (size 1.2 0.5) (layers F.Cu B.Mask) ${p.net.VCC.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -6.35 6.35 ${p.rot + 180}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -6.35 5.842 ${p.rot + 180}) (size 0.1 0.1) (layers F.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )




    (pad 24 smd custom (at -13.97 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu B.Mask) ${p.net.P1.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -13.97 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -13.97 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )

    (pad 23 smd custom (at -11.43 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu B.Mask) ${p.net.P0.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -11.43 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -11.43 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )

    (pad 22 smd custom (at -8.89 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu B.Mask) ${p.net.GND.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -8.89 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -8.89 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )



    (pad 21 smd custom (at -6.35 -4.826 ${p.rot}) (size 1.2 0.5) (layers F.Cu B.Mask) ${p.net.GND.str}
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -6.35 -6.35 ${p.rot}) (size 0.25 1) (layers F.Cu)
      (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives)
    )
    (pad "" smd custom (at -6.35 -5.842 ${p.rot}) (size 0.1 0.1) (layers F.Cu B.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )





    (pad 23 smd custom (at -11.43 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.net.P0.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))
    (pad 23 smd custom (at -11.43 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.net.P0.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 2 smd custom (at -11.43 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.GND.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 2 thru_hole circle (at -11.43 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.GND.str})
    (pad 23 thru_hole circle (at -11.43 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P0.str})


    (pad 24 thru_hole circle (at -13.97 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.P1.str})
    (pad 1 thru_hole circle (at -13.97 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.RAW.str})
    (pad 24 smd custom (at -13.97 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.net.P1.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 1 smd custom (at -13.97 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.RAW.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 1 smd custom (at -13.97 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.net.RAW.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ))
    (pad 24 smd custom (at -13.97 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.net.P1.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))

    (pad 22 thru_hole circle (at -8.89 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.GND.str})
    (pad 3 thru_hole circle (at -8.89 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.RST.str})
    (pad 22 smd custom (at -8.89 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.net.GND.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 3 smd custom (at -8.89 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.RST.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 3 smd custom (at -8.89 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.net.RST.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ))
    (pad 22 smd custom (at -8.89 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.net.GND.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))


    (pad 21 thru_hole circle (at -6.35 0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.GND.str})
    (pad 4 thru_hole circle (at -6.35 -0.762 ${p.rot + 180}) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.net.VCC.str})
    (pad 21 smd custom (at -6.35 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers F.Cu) ${p.net.GND.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 4 smd custom (at -6.35 -0.762 ${p.rot}) (size 0.25 0.25) (layers F.Cu) ${p.net.VCC.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
        (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
        (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
      ))
    (pad 4 smd custom (at -6.35 -0.762 ${p.rot}) (size 0.25 0.25) (layers B.Cu) ${p.net.VCC.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
        (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
        (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
      ))
    (pad 21 smd custom (at -6.35 0.762 ${p.rot + 180}) (size 0.25 0.25) (layers B.Cu) ${p.net.GND.str}
      (zone_connect 0)
      (options (clearance outline) (anchor circle))
      (primitives
        (gr_line (start 0 0) (end 0.762 -0.762) (width 0.25))
        (gr_line (start 0.762 -0.762) (end 0.762 -3.302) (width 0.25))
        (gr_line (start 0.762 -3.302) (end 0 -4.064) (width 0.25))
      ))

  )
  `
  }
}

