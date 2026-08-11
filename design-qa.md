# Design QA: 启枢「如何工作」标题

- Source visual truth: `/var/folders/tm/2k49bgk506b3dpv7hjtkhdjc0000gn/T/codex-clipboard-feded721-b632-403d-bb54-0eccfa7c0d9e.png`
- Implementation screenshot: `/tmp/qishu-workflow-final-desktop.png`
- Full-view comparison: `/tmp/qishu-workflow-comparison.png`
- Focused title comparison: `/tmp/qishu-workflow-title-comparison.png`
- Viewport: 2048 × 1024 desktop; responsive check at 390 × 844 mobile
- State: `qishu-ai.html#workflow`, loaded, header scrolled state

**Findings**

- No actionable P0/P1/P2 differences remain for the requested title correction.
- Typography: “启枢如何工作” is a dedicated first line. The supporting sequence is a smaller, single second line with centered alignment and no clipping.
- Spacing and layout rhythm: both lines share the section center axis; the title block remains inside the existing content rail.
- Colors and visual tokens: existing white/orange hierarchy and dark grid background are unchanged.
- Image quality and asset fidelity: no image assets were changed; the supplied GIBIRA wordmark remains intact.
- Copy and content: all requested wording is preserved exactly and only its line structure changed.
- Responsive result: desktop title center delta is 0 px with no horizontal overflow. At 390 px, the second line is 336 px wide inside the 351 px content rail and the page has no horizontal overflow.

**Open Questions**

- None.

**Implementation Checklist**

- [x] Split the heading into two semantic title lines.
- [x] Keep both lines centered within the existing financing section rail.
- [x] Use responsive type sizing so the second line remains complete on mobile.
- [x] Verify desktop and mobile overflow and writing direction.

**Comparison History**

- Initial P1: the original single-line heading exceeded the viewport and clipped “人工复核”.
- Fix: added a stacked title variant for `#workflow`, with a dedicated first line and responsive second line.
- Post-fix evidence: the focused comparison shows both lines fully visible; browser measurements confirm zero horizontal overflow at desktop and mobile widths.

**Follow-up Polish**

- No P3 changes are required for this scoped update.

final result: passed
