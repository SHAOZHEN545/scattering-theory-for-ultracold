This note is a prologue to [[Scattering Theory 1 - Asymptotic Dynamics and the Lippmann--Schwinger Equation|Scattering Theory 1]]. Its §2 writes the outcome of a scattering experiment as the laboratory amplitude

$$
\mathcal A_{hg}(t_f,t_i)=\langle h|\,e^{iH_0t_f/\hbar}\,e^{-iH(t_f-t_i)/\hbar}\,e^{-iH_0t_i/\hbar}\,|g\rangle ,
$$

with the interaction-picture operator $U_I(t_f,t_i)$ in the middle. Here we see where this form comes from, using the one-dimensional delta barrier: first the textbook stationary solution, then the time-dependent problem it leaves open, then what the time-dependent solution says about $\mathcal A_{hg}$ and $U_I$. Derivations and checks are in the [[Scattering Theory 0 Supplement - Details of the Delta-Barrier Problem|supplement]], cited as §S$n$. Transmission and reflection amplitudes are written $\tau(k)$ and $r(k)$; $t$ always means time.

---

## 1. The problem

$$
H=H_0+V,\qquad H_0=\frac{\hat p^2}{2m},\qquad V=\lambda\,\delta(\hat x),\quad \lambda>0,\qquad \kappa\equiv\frac{m\lambda}{\hbar^2}.
$$

The free states $\langle x|k\rangle=e^{ikx}/\sqrt{2\pi}$, with $E_k=\hbar^2k^2/2m$, are the reference asymptotic states of Scattering Theory 1, §1. Since $\lambda>0$ there is no bound state.

---

## 2. The stationary solution

The eigenstate of $H$ at energy $E_k$ with a source on the left ($k>0$) is

$$
\phi_k(x)=\frac{1}{\sqrt{2\pi}}
\begin{cases}
e^{ikx}+r\,e^{-ikx}, & x<0,\\[2pt]
\tau\,e^{ikx}, & x>0.
\end{cases}
$$

Continuity at the origin and the derivative jump $\phi'(0^+)-\phi'(0^-)=2\kappa\,\phi(0)$ (§S1) give

$$
\boxed{\;\tau(k)=\frac{k}{k+i\kappa},\qquad r(k)=\frac{-i\kappa}{k+i\kappa}\;}
\qquad
\mathcal T=|\tau|^2=\frac{k^2}{k^2+\kappa^2},\quad \mathcal R=|r|^2=\frac{\kappa^2}{k^2+\kappa^2}.
$$

Since $\tau=1+r$, the solution can be written as

$$
\phi_k(x)=\langle x|k\rangle+\frac{r(k)}{\sqrt{2\pi}}\,e^{ik|x|},
$$

the incident plane wave plus a wave running away from the origin on both sides. $\phi_k$ only picks up a phase in time, so it describes a **steady beam**: incident, reflected, and transmitted waves are present everywhere at all times, and $\mathcal T$, $\mathcal R$ are flux fractions. Textbooks stop here.

---

## 3. The puzzle

A single particle has a *before* and an *after*: it comes in from the left, hits the barrier, and ends up on one side. The stationary state has neither, so why does it give the right transmission probability? To answer this we must pose the experiment in time: prepare a particle far to the left at an early time $t_i$, evolve it with $H$, and look at a late time $t_f$. A plane wave is everywhere at once and cannot be "far to the left", so this requires a **wave packet**. Its spread of energies is where the time dependence comes from.

---

## 4. Wave packets and labels

### 4.1 A free packet

$$
\psi_0(x,t)=\int dk\;g(k)\,e^{-iE_kt/\hbar}\,\langle x|k\rangle ,
$$

with $g$ peaked at $k_0>0$ and width $\sigma_k\ll k_0$. Qualitatively (computed in §S2): the center moves at $v_0=\hbar k_0/m$; the packet has a width $\sigma_x\simeq1/2\sigma_k$ and passes a point in the time $t_c\equiv\sigma_x/v_0$; for real $g$ it is narrowest at $x=0$, $t=0$, converging before and spreading after; and it runs away faster than it spreads, by the factor $k_0/\sigma_k\gg1$. So a right-moving packet lies entirely at $x<0$ as $t\to-\infty$ and entirely at $x>0$ as $t\to+\infty$.

### 4.2 The label $|g\rangle$

The source prepares a state $|\psi(t_i)\rangle$ far to the left, where it moves freely. Name it by carrying it with $H_0$ to the reference time $t=0$:

$$
|g\rangle\equiv e^{iH_0t_i/\hbar}|\psi(t_i)\rangle,\qquad\text{i.e.}\qquad |\psi(t_i)\rangle=e^{-iH_0t_i/\hbar}|g\rangle .
$$

$|g\rangle$ is **not** the state of the real particle at $t=0$; it is what the particle would look like at $t=0$ without the barrier. Nor does it depend on $t_i$: an earlier $t_i$ puts the prepared packet farther away and makes it wider, without limit, but along the same free motion with the same name. So $|g\rangle$ is a **label** of the incoming free motion, which stays fixed while the prepared state has no limit. This is the construction of Scattering Theory 1, §2.

---

## 5. The time-dependent solution

### 5.1 The solution

Keep the coefficients $g(k)$ of the free packet, but replace each plane wave by the eigenstate whose incident part it is:

$$
\boxed{\;\psi(x,t)=\int_0^\infty dk\;g(k)\,e^{-iE_kt/\hbar}\,\phi_k(x)\;}
$$

This solves the time-dependent Schrödinger equation exactly, so we only need to check that it is the prepared state at early times. By the compact form of $\phi_k$,

$$
\psi=\psi_0+\psi_{\rm sc},\qquad
\psi_{\rm sc}(x,t)=\int_0^\infty\frac{dk}{\sqrt{2\pi}}\;r(k)\,g(k)\,e^{ik|x|-iE_kt/\hbar}.
$$

(Right-incident eigenstates do not enter: §S4.) Once we know which eigenstate each $|k\rangle$ turns into, we know the answer for every packet.

### 5.2 Before and after

On $x>0$, $\psi_{\rm sc}$ is a right-moving free packet with amplitude $r(k)g(k)$; on $x<0$ it is the mirror image, moving left. Each is kept only on its own half line, and by §4.1 they sit near $x=\pm v_0t$.

- **Before** ($t\ll-t_c$): both lie on the side where they are cut off, so $\psi_{\rm sc}\to0$ and $\psi(t)\to e^{-iH_0t/\hbar}|g\rangle$. This is the prepared state, so $\psi$ is the state of the experiment.
- **After** ($t\gg t_c$): both scattered packets are on their own side, and $\psi_0$ has moved to $x>0$, where it adds to the forward-scattered packet to give the amplitude $(1+r)g=\tau g$. Hence $\psi(t)\to e^{-iH_0t/\hbar}|g_{\rm out}\rangle$ with

$$
\boxed{\;|g_{\rm out}\rangle=\int_0^\infty dk\;g(k)\Big[\tau(k)\,|k\rangle+r(k)\,|{-k}\rangle\Big]\;}
$$

The particle is free before and after; the collision only changes its label from $|g\rangle$ to $|g_{\rm out}\rangle$, and each $|k\rangle$ feeds only $\pm k$, the states of the same energy. "Incoming" and "outgoing" now mean "before" and "after". Physically, $\psi_{\rm sc}$ is radiated by the barrier, acting as a point source while the packet is on it (§S3).

### 5.3 During the collision

![[ST0_fig_exact_solution.png|center|720]]

*Exact $|\psi(x,t)|$ for $k_0=\kappa$ ($\mathcal T=\mathcal R=\tfrac12$), $\sigma_x=4$, $\hbar=m=1$. Red dashed: the free motion $e^{-iH_0t/\hbar}|g\rangle$. At $t=-40$ the two coincide; at $t=0$ the red curve is $|\langle x|g\rangle|^2$, and the real particle looks nothing like it; at $t=+40$ the particle is a transmitted plus a reflected packet.*

For $|t|\lesssim t_c$ the incident and reflected waves interfere on the left while the transmitted wave builds up on the right. This is the real particle at $t=0$, and it is not $|g\rangle$.

---

## 6. Why the stationary answer works

Long after the collision the two packets are far apart, and free motion preserves norms, so

$$
\boxed{\;P_{\rm T}=\int_0^\infty dk\;|g(k)|^2\,\mathcal T(k)\;}
$$

Each momentum component is transmitted with its own stationary probability, because different energies never mix; for a narrow packet $P_{\rm T}\simeq\mathcal T(k_0)$. Conversely, a steady beam is the limit of long packets (§S5). Packets define what the experiment is; stationary states carry the information about the barrier, $\tau$ and $r$.

---

## 7. The laboratory amplitude and the interaction picture

### 7.1 The detector's question

A detector cannot test against a fixed state, because the packet flies past any fixed state. It accepts an outgoing free motion, which we name like the source's, by a label $|h\rangle$ at $t=0$. The amplitude is then

$$
\boxed{\;\mathcal A_{hg}(t_f,t_i)=\langle h|\,e^{iH_0t_f/\hbar}\,e^{-iH(t_f-t_i)/\hbar}\,e^{-iH_0t_i/\hbar}\,|g\rangle\;}
$$

Read from right to left: from the label to the prepared state by free motion, through the collision with $H$, and back to the detector's label by free motion. The free factors are simply the definitions of what is prepared and what is detected. By §5.2, $\mathcal A_{hg}\to\langle h|g_{\rm out}\rangle$.

### 7.2 The interaction picture follows the label

$$
\mathcal A_{hg}=\langle h|\psi_I(t_f)\rangle,\qquad |\psi_I(t)\rangle\equiv e^{iH_0t/\hbar}|\psi(t)\rangle=U_I(t,t_i)|g\rangle .
$$

If $V$ were switched off at time $t$, the particle would move on as $e^{-iH_0t'/\hbar}|\psi_I(t)\rangle$. So **$|\psi_I(t)\rangle$ is the label of the free motion the particle is on at time $t$**: $|g\rangle$ before the collision, $|g_{\rm out}\rangle$ after. It obeys

$$
|\psi_I(t)\rangle=|g\rangle-\frac{i}{\hbar}\int_{t_i}^{t}dt'\;V_I(t')\,|\psi_I(t')\rangle,\qquad V_I(t)=e^{iH_0t/\hbar}Ve^{-iH_0t/\hbar},
$$

the equation for $U_I$ in Scattering Theory 1, §2. For the delta barrier $V_I(t)=\lambda\,\delta(\hat x+\hat pt/m)$, which acts only while the free packet named by the label is at the origin, $|t|\lesssim t_c$ (§S6). The Schrödinger state keeps moving forever; the interaction-picture state changes only during the collision.

### 7.3 The $S$ operator

$$
S|g\rangle\equiv\lim_{t_f\to+\infty,\;t_i\to-\infty}U_I(t_f,t_i)|g\rangle=|g_{\rm out}\rangle,
\qquad\text{so}\qquad
S|k\rangle=\tau(|k|)\,|k\rangle+r(|k|)\,|{-k}\rangle .
$$

$S$ connects only states of the same energy and contains neither the apparatus nor the times: it describes the barrier alone.

### 7.4 The whole calculation in one picture

> [!figure]
> ![[Classical analog.svg|center|600]]
> Each observed ray is named by its free extension (dashed) into the interaction region near $t=0$: $|g\rangle$ for the incoming ray, $|h\rangle$ for the outgoing ray a detector accepts. The real trajectory (orange) bends inside the region. $S_{hg}=\langle h|S|g\rangle$ is the amplitude that the collision switches $g$ into $h$; in quantum mechanics $S|g\rangle$ is a superposition of many outgoing rays (grey fan).

- **Labels.** The blue dot is the incoming ray extended freely to $t=0$, i.e. $|g\rangle$; the green dot is $|h\rangle$. The real particle (orange) is at neither dot at $t=0$.
- **Laboratory amplitude**, right to left: from the blue dot out to the source at $t_i$, along the real path to $t_f$, back along the green dashed line to the green dot.
- **Interaction picture.** $|\psi_I(t)\rangle$ is the tangent to the orange curve at time $t$, extended to $t=0$. It turns only while the particle is in the interaction region (blue circle), i.e. around $t=0$ (red circle).
- **$S$** is the switchboard in the red circle. A quantum particle leaves along several rays at once (grey fan), here the transmitted and the reflected one.

### 7.5 Why the folded switchboard has a limit

The Schrödinger operator $U=e^{-iH(t_f-t_i)/\hbar}$ has no limit. Since $U=e^{-iH_0t_f/\hbar}\,U_I\,e^{iH_0t_i/\hbar}$ and $S$ is on shell,

$$
\langle k'|U(t_f,t_i)|k\rangle\;\simeq\;\langle k'|S|k\rangle\;e^{-iE_k(t_f-t_i)/\hbar}.
$$

**The Schrödinger table is the $S$ table times a clock that never stops.** The clock is the free motion of the packet running off to infinity, and it is there even without the barrier. $U_I$ removes it at both ends: in the figure, both ends become dots near $t=0$ that stay put as $t_i\to-\infty$ and $t_f\to+\infty$, and the label changes only during the finite time the particle spends in the blue circle. That is why the limit exists, and it is what Scattering Theory 1, §2 means by "factoring out the known reference motion". Unitarity, the on-shell property, and long-range potentials are discussed in §S7.

---

## 8. Summary

The stationary solution gives $\tau$ and $r$ for a steady beam. A single particle needs a packet, named by a label $|g\rangle$. The exact state $\int dk\,g\,e^{-iE_kt/\hbar}\phi_k$ follows the free motion of $|g\rangle$ before the collision and of $|g_{\rm out}\rangle$ after it, so each component is transmitted with its stationary probability. The laboratory amplitude compares the exact state with the detector's free motion; the interaction picture follows the label, which changes only during the collision; its limit is $S$.

| Scattering Theory 1 | here |
|---|---|
| §2, laboratory amplitude and $U_I$ | §4.2, §7.1–7.2 |
| §3, $S$ and energy conservation | §5.2, §7.3 |
| §§4–6, Lippmann–Schwinger, $\lvert\psi_k^{(+)}\rangle$ | §2: $\phi_k=\lvert\psi_k^{(+)}\rangle$; §S3.1 |
| §7, Møller operators | §5.1, §7.5, §S7 |
