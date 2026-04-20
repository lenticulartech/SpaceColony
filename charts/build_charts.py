import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np

# IBM Blue palette
NAVY = "#1F4E79"
BLUE = "#2E86AB"
LIGHT = "#D5E8F0"
MOON_TAN = "#C9B38C"
BROWN = "#8B6914"
GOOD = "#548235"
WARN = "#BF9000"
BAD = "#C00000"
MUTED = "#555555"

plt.rcParams['font.family'] = 'DejaVu Sans'
plt.rcParams['font.size'] = 11

# =========================================================================
# CHART 1: Must-Have gate pass/fail matrix
# =========================================================================
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
    ("NFR-23", "Standard interface (governance)"),
    ("FR-10", "Inter-tier communication"),
    ("FR-11", "Crew rotation and resupply"),
]

# Pass = 1, Fail = 0
orbital = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
moon    = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
mars    = [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]

labels = [f"{m[0]}\n{m[1][:28]}" for m in musts]
x = np.arange(len(musts))
width = 0.27

def bar_colors(vals):
    return [GOOD if v == 1 else BAD for v in vals]

ax.bar(x - width, orbital, width, color=bar_colors(orbital), edgecolor='black', linewidth=0.5, label='Orbital')
ax.bar(x,         moon,    width, color=bar_colors(moon),    edgecolor='black', linewidth=0.5, label='Moon')
ax.bar(x + width, mars,    width, color=bar_colors(mars),    edgecolor='black', linewidth=0.5, label='Mars')

# Dest labels below bars
for i in range(len(musts)):
    ax.text(i - width, -0.08, 'O', ha='center', va='top', fontsize=9, color=MUTED, fontweight='bold')
    ax.text(i,         -0.08, 'Mo', ha='center', va='top', fontsize=9, color=MUTED, fontweight='bold')
    ax.text(i + width, -0.08, 'Ma', ha='center', va='top', fontsize=9, color=MUTED, fontweight='bold')

ax.set_xticks(x)
ax.set_xticklabels(labels, rotation=45, ha='right', fontsize=8.5)
ax.set_ylim(0, 1.2)
ax.set_yticks([])
ax.set_title('Must-Have Gate Results: Pass (green) vs Fail (red)', fontsize=15, color=NAVY, fontweight='bold', pad=15)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.spines['left'].set_visible(False)

pass_patch = mpatches.Patch(color=GOOD, label='Pass')
fail_patch = mpatches.Patch(color=BAD, label='Fail')
ax.legend(handles=[pass_patch, fail_patch], loc='upper right', frameon=False, fontsize=11)

# Summary stats
ax.text(-0.5, 1.15, f"Orbital: 15 of 15 Must-Haves pass", color=GOOD, fontweight='bold', fontsize=10)
ax.text(-0.5, 1.08, f"Moon: 14 of 15 Must-Haves pass (fails gravity)", color=WARN, fontweight='bold', fontsize=10)
ax.text(-0.5, 1.01, f"Mars: 11 of 15 Must-Haves pass (fails 4)", color=BAD, fontweight='bold', fontsize=10)

plt.figtext(0.5, -0.02, 'O = Orbital, Mo = Moon, Ma = Mars', ha='center', fontsize=9, color=MUTED, style='italic')
plt.tight_layout()
plt.savefig('/home/claude/charts/chart1_must_have_gates.png', dpi=160, bbox_inches='tight', facecolor='white')
plt.close()
print("Chart 1 done")

# =========================================================================
# CHART 2: Weighted scoring, horizontal bars
# =========================================================================
fig, ax = plt.subplots(figsize=(11, 5.5))

dests = ['Orbital\n(rotating habitats)', 'Moon', 'Mars']
scores_pct = [71.0, 63.2, 31.6]
scores_abs = [1186, 1055, 527]
max_score = 1670
colors = [BLUE, MOON_TAN, BAD]

y = np.arange(len(dests))
bars = ax.barh(y, scores_pct, color=colors, edgecolor='black', linewidth=0.8, height=0.55)

# Labels on bars
for i, (bar, pct, absval) in enumerate(zip(bars, scores_pct, scores_abs)):
    ax.text(pct + 1.5, bar.get_y() + bar.get_height()/2,
            f"{pct:.1f}%  ({absval:,} / {max_score:,})",
            va='center', fontsize=12, fontweight='bold', color=NAVY)

# Gate pass/fail indicator
gate_labels = [
    ("Passes all Must-Haves", GOOD),
    ("Fails 1 Must-Have", WARN),
    ("Fails 4 Must-Haves", BAD),
]
for i, (txt, col) in enumerate(gate_labels):
    ax.text(-2, i, txt, ha='right', va='center', fontsize=10, color=col, fontweight='bold')

ax.set_yticks(y)
ax.set_yticklabels(dests, fontsize=12)
ax.set_xlim(-25, 95)
ax.set_xlabel('Weighted score (percent of maximum)', fontsize=11, color=MUTED)
ax.set_title('Weighted Score by Destination (25 requirements, weighted)', fontsize=15, color=NAVY, fontweight='bold', pad=15)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.axvline(x=0, color='#888', linewidth=0.8)
ax.set_xticks([0, 20, 40, 60, 80])
ax.set_xticklabels(['0%', '20%', '40%', '60%', '80%'])
ax.invert_yaxis()
ax.grid(axis='x', alpha=0.3, linestyle='--')

plt.tight_layout()
plt.savefig('/home/claude/charts/chart2_weighted_scores.png', dpi=160, bbox_inches='tight', facecolor='white')
plt.close()
print("Chart 2 done")

# =========================================================================
# CHART 3: Gravity dose-response curve (MHU-8 study)
# =========================================================================
fig, ax = plt.subplots(figsize=(11, 6))

gravity_levels = [0, 0.166, 0.33, 0.378, 0.67, 1.0]
gravity_labels = ['0G\n(microgravity)', '0.166G\n(Moon)', '0.33G', '0.378G\n(Mars)', '0.67G', '1G\n(Earth)']
# Muscle retention / bone density retention %
muscle_retention = [45, 55, 72, 76, 95, 100]

ax.plot(gravity_levels, muscle_retention, marker='o', color=NAVY, linewidth=2.5, markersize=9, markerfacecolor=BLUE, markeredgecolor=NAVY, markeredgewidth=1.5, zorder=3)

# Threshold lines
ax.axhline(y=95, color=GOOD, linestyle='--', linewidth=1.5, alpha=0.7)
ax.text(1.02, 95, 'Full prevention\n(MHU-8: 0.67G+)', color=GOOD, fontsize=9, fontweight='bold', va='center')

ax.axhline(y=72, color=WARN, linestyle='--', linewidth=1.5, alpha=0.7)
ax.text(1.02, 72, 'Partial mitigation\n(MHU-8: 0.33G)', color=WARN, fontsize=9, fontweight='bold', va='center')

# Shade conservative zone
ax.axvspan(0, 1.0, alpha=0.0)
ax.fill_between([0, 0.67], [0, 0], [100, 100], alpha=0.08, color=BAD)
ax.fill_between([0.67, 1.0], [0, 0], [100, 100], alpha=0.08, color=GOOD)

# Callouts for destinations
ax.annotate('Moon\n(permanent\nunsafe)', xy=(0.166, 55), xytext=(0.08, 20),
            fontsize=9, ha='center', color=BAD,
            arrowprops=dict(arrowstyle='->', color=BAD, lw=1.2))
ax.annotate('Mars\n(untested at\nmulti-gen scale)', xy=(0.378, 76), xytext=(0.45, 40),
            fontsize=9, ha='center', color=BAD,
            arrowprops=dict(arrowstyle='->', color=BAD, lw=1.2))
ax.annotate('Orbital\n(engineered\nvia rotation)', xy=(1.0, 100), xytext=(0.85, 62),
            fontsize=9, ha='center', color=GOOD, fontweight='bold',
            arrowprops=dict(arrowstyle='->', color=GOOD, lw=1.2))

ax.set_xticks(gravity_levels)
ax.set_xticklabels(gravity_labels, fontsize=9)
ax.set_xlim(-0.05, 1.15)
ax.set_ylim(30, 110)
ax.set_ylabel('Muscle retention (% of Earth-gravity baseline)', fontsize=11, color=MUTED)
ax.set_xlabel('Gravitational acceleration', fontsize=11, color=MUTED)
ax.set_title('Gravity Dose-Response: Why 1G Is the Conservative Threshold', fontsize=15, color=NAVY, fontweight='bold', pad=15)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.grid(alpha=0.3, linestyle='--')

ax.text(0.5, 112, 'Source: Mortreux and Bouxsein 2024 (JAXA MHU-8 mouse study). Reproduction at partial gravity untested in mammals.',
        ha='center', fontsize=8.5, color=MUTED, style='italic', transform=ax.transData)

plt.tight_layout()
plt.savefig('/home/claude/charts/chart3_gravity_curve.png', dpi=160, bbox_inches='tight', facecolor='white')
plt.close()
print("Chart 3 done")

# =========================================================================
# CHART 4: Sensitivity analysis heatmap
# =========================================================================
fig, ax = plt.subplots(figsize=(12, 5))

scenarios = [
    'Baseline\n(published weights)',
    'Best-case Mars\n(partial-G viable)',
    'Most-favorable Moon\n(ISRU accelerated)',
    'Cost-weighted\n(cost 2x weight)',
    'Resilience-weighted\n(risk 2x weight)',
    'Aggressive tech\n(faster maturation)',
    'Conservative tech\n(slower maturation)',
]

destinations = ['Orbital', 'Moon', 'Mars']

# Scores per scenario (Orbital, Moon, Mars)
data = np.array([
    [71.0, 63.2, 31.6],
    [68.5, 61.8, 42.0],
    [69.8, 68.5, 30.2],
    [72.4, 64.7, 29.8],
    [73.1, 62.5, 28.4],
    [72.0, 65.2, 35.1],
    [69.8, 61.0, 28.2],
])

# Determine rank (1=winner)
ranks = np.zeros_like(data, dtype=int)
for i, row in enumerate(data):
    order = np.argsort(-row)
    for rank, idx in enumerate(order):
        ranks[i, idx] = rank + 1

# Heat color by rank: 1st=green, 2nd=tan, 3rd=red
rank_colors = {1: '#A8D08D', 2: '#F4D6A0', 3: '#E8A6A0'}

for i in range(len(scenarios)):
    for j in range(len(destinations)):
        color = rank_colors[ranks[i, j]]
        ax.add_patch(mpatches.Rectangle((j, i), 1, 1, facecolor=color, edgecolor='white', linewidth=2))
        ax.text(j + 0.5, i + 0.5, f"{data[i, j]:.1f}%\n(#{ranks[i, j]})",
                ha='center', va='center', fontsize=10, fontweight='bold', color='#222')

ax.set_xlim(0, 3)
ax.set_ylim(0, 7)
ax.set_xticks([0.5, 1.5, 2.5])
ax.set_xticklabels(destinations, fontsize=11, fontweight='bold')
ax.set_yticks([i + 0.5 for i in range(7)])
ax.set_yticklabels(scenarios, fontsize=10)
ax.invert_yaxis()
ax.set_title('Sensitivity Analysis: Ranking Across 7 Scenarios', fontsize=15, color=NAVY, fontweight='bold', pad=15)

# Rank legend
handles = [
    mpatches.Patch(color=rank_colors[1], label='#1 (ranked first)'),
    mpatches.Patch(color=rank_colors[2], label='#2 (ranked second)'),
    mpatches.Patch(color=rank_colors[3], label='#3 (ranked third)'),
]
ax.legend(handles=handles, loc='upper right', bbox_to_anchor=(1.28, 1.0), frameon=False, fontsize=9)
ax.tick_params(left=False, bottom=False)

for spine in ax.spines.values():
    spine.set_visible(False)

plt.figtext(0.5, -0.03, 'Orbital ranks first in every scenario tested. Ranking is robust to weight and assumption changes.',
            ha='center', fontsize=10, color=MUTED, style='italic')

plt.tight_layout()
plt.savefig('/home/claude/charts/chart4_sensitivity.png', dpi=160, bbox_inches='tight', facecolor='white')
plt.close()
print("Chart 4 done")

# =========================================================================
# CHART 5: Kano classification distribution
# =========================================================================
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(13, 5.5))

# LEFT: Kano category count
kano_cats = ['Basic\n(Must-be)', 'Performance\n(One-dimensional)', 'Excitement\n(Attractive)', 'Indifferent']
kano_counts = [7, 5, 2, 1]
kano_colors = [BAD, WARN, GOOD, MUTED]

bars = ax1.bar(kano_cats, kano_counts, color=kano_colors, edgecolor='black', linewidth=0.7, width=0.6)
for bar, count in zip(bars, kano_counts):
    ax1.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.15,
             str(count), ha='center', fontsize=13, fontweight='bold', color=NAVY)

ax1.set_title('Requirements by Kano Category', fontsize=13, color=NAVY, fontweight='bold', pad=12)
ax1.set_ylabel('Count', fontsize=10, color=MUTED)
ax1.set_ylim(0, 8.5)
ax1.spines['top'].set_visible(False)
ax1.spines['right'].set_visible(False)
ax1.tick_params(axis='x', labelsize=9.5)
ax1.grid(axis='y', alpha=0.3, linestyle='--')

# RIGHT: Basic (Must-be) pass counts per destination
cats = ['Orbital', 'Moon', 'Mars']
basic_pass = [7, 6, 4]  # of 7 Basic requirements
basic_fail = [0, 1, 3]
colors_orb = [BLUE, MOON_TAN, BAD]

x = np.arange(len(cats))
width = 0.4

b1 = ax2.bar(x, basic_pass, width, color=GOOD, edgecolor='black', linewidth=0.7, label='Passes basic')
b2 = ax2.bar(x, basic_fail, width, bottom=basic_pass, color=BAD, edgecolor='black', linewidth=0.7, label='Fails basic')

for i, (p, f) in enumerate(zip(basic_pass, basic_fail)):
    ax2.text(i, p / 2, str(p), ha='center', va='center', fontsize=13, fontweight='bold', color='white')
    if f > 0:
        ax2.text(i, p + f/2, str(f), ha='center', va='center', fontsize=13, fontweight='bold', color='white')

ax2.set_xticks(x)
ax2.set_xticklabels(cats, fontsize=11, fontweight='bold')
ax2.set_title('Basic (Must-be) Requirements: Pass vs Fail\n(of 7 total Basic requirements)', fontsize=13, color=NAVY, fontweight='bold', pad=12)
ax2.set_ylabel('Count', fontsize=10, color=MUTED)
ax2.set_ylim(0, 8)
ax2.legend(loc='upper right', frameon=False, fontsize=9)
ax2.spines['top'].set_visible(False)
ax2.spines['right'].set_visible(False)
ax2.grid(axis='y', alpha=0.3, linestyle='--')

plt.suptitle('Kano Analysis: Requirements Classification and Basic-Need Satisfaction',
             fontsize=15, color=NAVY, fontweight='bold', y=1.03)
plt.tight_layout()
plt.savefig('/home/claude/charts/chart5_kano.png', dpi=160, bbox_inches='tight', facecolor='white')
plt.close()
print("Chart 5 done")

print("\nAll charts generated.")
