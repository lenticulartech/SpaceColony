import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np

NAVY = "#1F4E79"
GOOD = "#548235"
BAD = "#C00000"
MUTED = "#555555"

plt.rcParams['font.family'] = 'DejaVu Sans'
plt.rcParams['font.size'] = 11

fig, ax = plt.subplots(figsize=(13, 7))

musts = [
    ("NFR-01", "Gravity for permanent habitation"),
    ("NFR-02", "Radiation exposure, career"),
    ("NFR-03", "ECLSS water recovery"),
    ("NFR-04", "ECLSS O2 recovery"),
    ("NFR-05", "Recovery Time Objective"),
    ("NFR-06", "Recovery Point Objective"),
    ("NFR-07", "Transport cost per kg"),
    ("NFR-08", "Failure expected value"),
    ("NFR-13", "Behavioral health support"),
    ("NFR-15", "Automation and autonomy"),
    ("NFR-16", "Monitoring and incident response"),
    ("NFR-17", "Physical and info security"),
    ("NFR-23", "Governance compatibility"),
    ("FR-10", "Inter-tier communication"),
    ("FR-11", "Crew rotation and resupply"),
]

# 1 = PASS, 0 = FAIL
orbital = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
moon    = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
mars    = [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]

data = np.array([orbital, moon, mars])
destinations = ['Orbital', 'Moon', 'Mars']

# Draw each cell
for j in range(len(musts)):
    for i in range(3):
        val = data[i, j]
        color = GOOD if val == 1 else BAD
        symbol = "✓" if val == 1 else "✗"
        ax.add_patch(mpatches.Rectangle((j, 2 - i), 1, 1, facecolor=color, edgecolor='white', linewidth=2))
        ax.text(j + 0.5, 2 - i + 0.5, symbol, ha='center', va='center', fontsize=18, color='white', fontweight='bold')

# Labels
ax.set_xlim(0, len(musts))
ax.set_ylim(-0.5, 3)
ax.set_xticks([j + 0.5 for j in range(len(musts))])
ax.set_xticklabels([f"{m[0]}\n{m[1][:26]}" for m in musts], rotation=45, ha='right', fontsize=8.5)
ax.set_yticks([0.5, 1.5, 2.5])
ax.set_yticklabels([destinations[2], destinations[1], destinations[0]], fontsize=12, fontweight='bold')
ax.tick_params(left=False, bottom=False)

for spine in ax.spines.values():
    spine.set_visible(False)

# Summary counts on right
for i, (dest, row) in enumerate(zip(destinations, data)):
    passes = int(row.sum())
    fails = 15 - passes
    color = GOOD if fails == 0 else (BAD if fails > 1 else "#BF9000")
    ax.text(len(musts) + 0.3, 2 - i + 0.5, f"{passes}/15 pass",
            ha='left', va='center', fontsize=11, fontweight='bold', color=color)

ax.set_title('Must-Have Gate Results by Destination (15 gates total)',
             fontsize=15, color=NAVY, fontweight='bold', pad=15)

# Legend
handles = [
    mpatches.Patch(color=GOOD, label='Pass (✓)'),
    mpatches.Patch(color=BAD, label='Fail (✗)'),
]
ax.legend(handles=handles, loc='lower right', bbox_to_anchor=(1.0, -0.38), frameon=False, fontsize=10, ncol=2)

plt.tight_layout()
plt.savefig('/home/claude/charts/chart1_must_have_gates.png', dpi=160, bbox_inches='tight', facecolor='white')
plt.close()
print("Chart 1 rebuilt")
