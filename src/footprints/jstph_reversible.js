module.exports = {
    nets: {
        pos: undefined,
        neg: undefined
    },
    params: {
        class: 'JST',
        side: 'F'
    },
    body: p => `

    (module JST_PH_S2B-PH-K_02x2.00mm_Angled (layer F.Cu) (tedit 58D3FE32)

        (descr "JST PH series connector, S2B-PH-K, side entry type, through hole, Datasheet: http://www.jst-mfg.com/product/pdf/eng/ePH.pdf")
        (tags "connector jst ph")

        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        (fp_line (start -2.25 0.25) (end -2.25 -1.35) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start -2.25 -1.35) (end -2.95 -1.35) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start -2.95 -1.35) (end -2.95 6.25) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start -2.95 6.25) (end 2.95 6.25) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start 2.95 6.25) (end 2.95 -1.35) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start 2.95 -1.35) (end 2.25 -1.35) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start 2.25 -1.35) (end 2.25 0.25) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start 2.25 0.25) (end -2.25 0.25) (layer ${p.param.side}.SilkS) (width 0.15))

        (fp_line (start -1 1.5) (end -1 2.0) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start -1.25 1.75) (end -0.75 1.75) (layer ${p.param.side}.SilkS) (width 0.15))

        (pad "" thru_hole oval (at -1 0 ${p.rot}) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) )
        (pad "" thru_hole oval (at 1 0 ${p.rot}) (size 1.2 1.7) (drill 0.75) (layers *.Cu *.Mask) )

        ${'' /* back side (normal) */}
        (pad "" smd custom (at -1 1.35 ${p.rot}) (size 0.25 2) (layers B.Cu)
            (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives)
        )
        (pad "" smd custom (at -1 2.826 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
                ) (width 0))
            )
        )
        (pad 1 smd custom (at -1 3.842 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.pos.str}
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
                ) (width 0))
            )
        )
        (pad "" smd custom (at 1 1.35 ${p.rot}) (size 0.25 2) (layers B.Cu)
            (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives)
        )
        (pad "" smd custom (at 1 2.826 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
                ) (width 0))
            )
        )
        (pad 2 smd custom (at 1 3.842 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask) ${p.net.neg.str}
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
                ) (width 0))
            )
        )
        ${'' /* front side */}
        (pad "" smd custom (at -1 1.35 ${p.rot}) (size 0.25 2) (layers F.Cu)
            (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives)
        )
        (pad "" smd custom (at -1 2.826 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
                ) (width 0))
            )
        )
        (pad 2 smd custom (at -1 3.842 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.neg.str}
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
                ) (width 0))
            )
        )
        (pad "" smd custom (at 1 1.35 ${p.rot}) (size 0.25 2) (layers F.Cu)
            (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives)
        )
        (pad "" smd custom (at 1 2.826 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly (pts
                    (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)
                ) (width 0))
            )
        )
        (pad 1 smd custom (at 1 3.842 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask) ${p.net.pos.str}
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives
                (gr_poly (pts
                    (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)
                ) (width 0))
            )
        )
    )
    `
    }