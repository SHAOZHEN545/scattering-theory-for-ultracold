This note grew out of a common point of confusion in [[Scattering Theory 1 - Asymptotic Dynamics and the Lippmann--Schwinger Equation|Scattering Theory 1]]. Its §2 writes the outcome of a scattering experiment as a *laboratory amplitude*,

$$
\mathcal A_{hg}(t_f,t_i)=\langle h|\,e^{iH_0t_f/\hbar}\,e^{-iH(t_f-t_i)/\hbar}\,e^{-iH_0t_i/\hbar}\,|g\rangle ,
$$

with the interaction-picture operator $U_I(t_f,t_i)$ in the middle. Why free evolutions at both ends, and why the interaction picture at all? Here we take the simplest scattering problem there is, the delta barrier, and solve it twice: first the familiar way, then in time. The formula above will appear on its own.

Everything here can be done exactly; the details are in the [[Scattering Theory 0 Supplement - Details of the Delta-Barrier Problem|supplement]], and pointers §S$n$ say where. Amplitudes are written $\tau$ and $r$, so that $t$ always means time.

---

## 1. The problem

We work in one dimension. A particle of mass $m$ and energy $E>0$ comes in from the left and hits a delta barrier at the origin,

$$
H=H_0+V,\qquad H_0=\frac{\hat p^2}{2m},\qquad V(x)=\lambda\,\delta(x),\quad \lambda>0 .
$$

How much of it is reflected, and how much gets through?

> [!figure]
> ![[ST0_fig_delta_barrier.svg|center|640]]
> The delta barrier: infinitely high and thin, with finite area $\lambda=\int V\,dx$. Away from the origin the particle is exactly free. A wave coming in from the left is partly reflected and partly transmitted.

All of the scattering happens at a single point. The only scale is the wavenumber $\kappa\equiv m\lambda/\hbar^2$, and there is no bound state. Away from the barrier the particle is described by plane waves $\langle x|k\rangle=e^{ikx}/\sqrt{2\pi}$ with $E_k=\hbar^2k^2/2m$, the reference asymptotic states of Scattering Theory 1, §1.

---

## 2. The stationary solution

We look for an eigenstate of $H$ at energy $E_k$:

$$
-\frac{\hbar^2}{2m}\phi''(x)+\lambda\,\delta(x)\,\phi(x)=E_k\,\phi(x).
$$

The point $x=0$ is singular: $\phi''$ does not exist there. Integrating over a small interval $(-\varepsilon,\varepsilon)$ shows what happens instead. The wavefunction stays continuous, but its derivative jumps (why: §S1.2),

$$
\phi(0^-)=\phi(0^+),\qquad \phi'(0^+)-\phi'(0^-)=2\kappa\,\phi(0).
$$

Away from the origin the solutions are $e^{\pm ikx}$. Since the particle comes in from the left, and nothing comes in from the right,

$$
\phi_k(x)=\frac{1}{\sqrt{2\pi}}
\begin{cases}
e^{ikx}+r\,e^{-ikx}, & x<0,\\[2pt]
\tau\,e^{ikx}, & x>0.
\end{cases}
$$

The two conditions at the origin read $1+r=\tau$ and $ik\tau-ik(1-r)=2\kappa\tau$, so

$$
\boxed{\;\tau(k)=\frac{k}{k+i\kappa},\qquad r(k)=\frac{-i\kappa}{k+i\kappa}\;}
\qquad
\mathcal T=|\tau|^2=\frac{1}{1+E_\lambda/E},\quad \mathcal R=1-\mathcal T,\quad E_\lambda\equiv\frac{m\lambda^2}{2\hbar^2}.
$$

The barrier has a characteristic energy $E_\lambda$, and $\mathcal T$ depends only on $E/E_\lambda$: at high energy the barrier becomes transparent, at low energy it acts like a hard wall. Since $\lambda$ enters only as $\lambda^2$, a delta *well* gives the same coefficients (§S1.3). One rewriting will be useful later: since $\tau=1+r$,

$$
\phi_k(x)=\langle x|k\rangle+\frac{r(k)}{\sqrt{2\pi}}\,e^{ik|x|},
$$

the incident plane wave plus a wave running away from the origin on both sides.

In a typical textbook, the problem ends here.

---

## 3. A question the stationary solution leaves open

Picture what we have just described. $\phi_k$ is an eigenstate, so $|\phi_k(x,t)|^2$ never changes: the incident, reflected, and transmitted waves are all present, everywhere, at all times. This is a **steady state**, like a laser on a partially reflecting mirror long after it was switched on.

But that is not how we talked about it. We said a particle *comes in*, *hits* the barrier, and is *reflected* or *transmitted*. Send particles one at a time, and each has a before and an after; the stationary state has neither. So where is the particle, and why should a time-independent calculation give the probability that it ends up on the right?

To find out, we pose the experiment as it happens: prepare a particle **far to the left** at an early time $t_i$, evolve it with $H$, and ask where it is at a late time $t_f$. A plane wave cannot do the first step, since it is spread over all of space. A particle that is somewhere is a **wave packet**, and its spread of energies is where the time dependence comes from. §4–7 follow the packet; §8 returns to the steady state.

---

## 4. Wave packets, and how to name them

### 4.1 A free packet

Far from the barrier the particle moves freely,

$$
\psi_0(x,t)=\int dk\;g(k)\,e^{-iE_kt/\hbar}\,\langle x|k\rangle ,
$$

with $g(k)$ peaked at $k_0>0$, of width $\sigma_k\ll k_0$. It behaves as you would expect from wave optics: it moves at $v_0=\hbar k_0/m$, has a width $\sigma_x\simeq1/2\sigma_k$, and takes a time $t_c\equiv\sigma_x/v_0$ to pass a point. For real $g$ it is narrowest at $x=0$, $t=0$, converging before and spreading after. And it runs away faster than it spreads, by a factor $k_0/\sigma_k$, so it lies entirely at $x<0$ in the remote past and at $x>0$ in the remote future. (A Gaussian, worked out: §S2.)

### 4.2 The label $|g\rangle$

Which packet does the source prepare? Any packet it likes, as long as it starts far to the left: some state $|\psi(t_i)\rangle$. There it moves freely, so we can carry it forward with $H_0$ to the reference time $t=0$ and name it there:

$$
|g\rangle\equiv e^{iH_0t_i/\hbar}|\psi(t_i)\rangle,\qquad\text{i.e.}\qquad
|\psi(t_i)\rangle=e^{-iH_0t_i/\hbar}|g\rangle .
$$

This looks roundabout. Note what $|g\rangle$ is: it is **not** the state of the real particle at $t=0$, which is in the middle of the collision; it is what the particle *would* look like at $t=0$ without the barrier. And it does **not** depend on $t_i$: prepare earlier, and the packet sits farther away and is wider, without limit, but on the same free motion with the same name. So $|g\rangle$ is a **label** for the incoming free motion, fixed while the prepared state runs off to infinity. This is how Scattering Theory 1, §2 introduces it.

Notice which way the logic runs. We do not ask the source to prepare "$|g\rangle$ run backwards"; whatever it prepares, we carry it to $t=0$ and *call* it by what we find there. Free motion can be undone, so every prepared packet has exactly one label, and nothing is lost by naming it this way.

> [!question]- Then why a real $g$, narrowest at the origin at $t=0$?
> Only because it gives the simplest formulas and figures; it is our running example, nothing more. A source that prepares its narrowest packet at $x=-L$ instead gives the same $|g(k)|$ with an extra phase, which records where and when the free packet is narrowest. See §S2.3.

And whatever the label is, it is a superposition $|g\rangle=\int dk\,g(k)\,|k\rangle$ of the reference states. We will see that all the barrier does is turn each $|k\rangle$ into a fixed outgoing combination, so a packet only ever supplies the coefficients $g(k)$.

---

## 5. Solving the problem in time

We want the state that equals $e^{-iH_0t_i/\hbar}|g\rangle$ at a very early $t_i$, evolved with $H$. This sounds hard, but the solution is easy to guess. Without the barrier, each plane wave in the packet just turns its phase. With it, the eigenstates are the $\phi_k$, each containing $\langle x|k\rangle$ as its incident part. So keep the coefficients and phases, and replace each plane wave by its eigenstate:

$$
\boxed{\;\psi(x,t)=\int_0^\infty dk\;g(k)\,e^{-iE_kt/\hbar}\,\phi_k(x)\;}
$$

This solves the Schrödinger equation exactly. A solution is fixed by its value at one time, so one check remains: does $\psi$ reduce to the free motion of $|g\rangle$ in the remote past? With the compact form of $\phi_k$,

$$
\psi=\psi_0+\psi_{\rm sc},\qquad
\psi_{\rm sc}(x,t)=\int_0^\infty\frac{dk}{\sqrt{2\pi}}\;r(k)\,g(k)\,e^{ik|x|-iE_kt/\hbar},
$$

so the question is whether the scattered wave vanishes at early times. The formula does not make this obvious, but the reason is physical, and it is the subject of the next section.

If it works, the payoff is large: the exact state uses the *same* coefficients $g(k)$ as the free packet. The packet enters only through $g(k)$, the barrier only through the eigenstate $\phi_k$ that each $|k\rangle$ turns into. Solve the barrier once, for plane waves, and we have the answer for every packet.

> [!question]- Why only left-incident eigenstates? Isn't "nothing comes in from the right" an assumption?
> No. Start from the general solution, with eigenstates incident from both sides, and let the packet decide: the right-incident ones enter with weight $g(k<0)$, which vanishes for a packet coming from the left. See §S4.

---

## 6. The barrier as a source

### 6.1 Where the scattered wave comes from

Subtract the free Schrödinger equation from the exact one:

$$
(i\hbar\partial_t-H_0)\,\psi_{\rm sc}=V\psi .
$$

The scattered wave obeys the free equation with a **source** $V\psi$, and our solution gives it in retarded form,

$$
\boxed{\;\psi_{\rm sc}(t)=-\frac{i}{\hbar}\int_{-\infty}^{t}dt'\;e^{-iH_0(t-t')/\hbar}\,V\psi(t')\;}
$$

Read it from right to left. At each earlier time $t'$ the barrier acts on the wave that is there and creates a little new wave, which then moves freely until $t$. The scattered wave is the sum of everything created *before* $t$. For the delta barrier $V\psi(t')=\lambda\,\psi(0,t')\,|x{=}0\rangle$: **the barrier is a point source whose strength is the amplitude $\psi(0,t')$ of the wave hitting it.** This is also where the $e^{ik|x|}$ in $\phi_k$ comes from: a point source radiates to both sides. "Outgoing" in the stationary problem means "caused by the source" in time.

> [!info]- Derivation: the retarded form, and $+i0$ as causality
> The retarded form is not an extra assumption: it is the $e^{ik|x|}$ of the eigenstates, rewritten in time, and the restriction $t'<t$ is the $+i0$ of Scattering Theory 1, §4. See §S3.1.

> [!figure]
> ![[ST0_fig_barrier_as_source.svg|center|600]]
> The barrier as a source. The incident packet (red) reaches the origin around $t=0$. The barrier radiates to both sides (green) with strength proportional to $\psi(0,t')$, so only while the packet is on it. Before that, nothing has been radiated. Afterwards the radiation on the left is the reflected wave; on the right it adds to the incident packet (grey dashed) to form the transmitted wave.

### 6.2 Before the collision

When is the source on? The wave at the origin is $\psi(0,t')\approx\tau(k_0)\,\psi_0(0,t')$, the free packet passing by: a **pulse**, appreciable only for $|t'|\lesssim t_c$. For $t\ll-t_c$ the retarded integral covers only times before the packet arrives, when the source is off. Nothing has been radiated, so

$$
\big\|\,\psi(t)-e^{-iH_0t/\hbar}|g\rangle\,\big\|\;\xrightarrow{\;t\to-\infty\;}\;0 .
$$

Our guess is the prepared state, hence the state of the experiment. Notice what did the work: not a special property of the delta function but causality. Nothing can be radiated before something reaches the source, and that holds for any potential of finite range.

> [!important]- The slow tail of a Gaussian
> A Gaussian contains every momentum, including some too slow ever to arrive, so strictly the source is never quite off. But the slow components near $k=0$ have weight $|g(0)|^2\propto e^{-k_0^2/2\sigma_k^2}$, utterly negligible for $\sigma_k\ll k_0$. The estimate, and the limit $t_i\to-\infty$ done carefully: §S3.2.

### 6.3 After the collision

For $t\gg t_c$ the pulse is over, and the radiation moves freely. On $x>0$, $\psi_{\rm sc}$ is a right-moving free packet with amplitude $r(k)g(k)$; on $x<0$, its mirror image moving left. Meanwhile $\psi_0$ has moved to $x>0$ and adds to the forward radiation; since $1+r=\tau$, **the transmitted wave is the incident wave plus the forward-scattered wave.** The particle is free again, on a new free motion:

$$
\psi(t)\;\longrightarrow\;e^{-iH_0t/\hbar}|g_{\rm out}\rangle,
\qquad
\boxed{\;|g_{\rm out}\rangle=\int_0^\infty dk\;g(k)\Big[\tau(k)\,|k\rangle+r(k)\,|{-k}\rangle\Big]\;}
$$

The collision only changes the label, from $|g\rangle$ to $|g_{\rm out}\rangle$, preserving its norm. Read the box as a rule for the reference states: each $|k\rangle$ goes to $\tau|k\rangle+r|{-k}\rangle$, and the packet just carries its coefficients $g(k)$ along. Only $|{\pm k}\rangle$ appear, because the source radiates at the energies that drive it (§S3.3). And "incoming" and "outgoing" now mean "before" and "after".

> [!question]- So is the particle in the state $|g\rangle$ at $t=0$?
> No. $|g\rangle$ is what the particle *would* look like at $t=0$ without the barrier. The real particle at $t=0$ is a fringed mixture of incident, reflected, and transmitted waves that looks nothing like it; the exact solution is plotted in §S3.4.

---

## 7. The laboratory amplitude and the interaction picture

Now look back at the structure of the calculation. This is where the formula of Scattering Theory 1, §2 comes from.

### 7.1 The detector's question

A detector asks for the amplitude of some accepted state. It cannot be a fixed state, since the packet flies past any fixed state. What a detector accepts is an outgoing free motion, which we name like the source's, by a label $|h\rangle$ at $t=0$. Then

$$
\boxed{\;\mathcal A_{hg}(t_f,t_i)=\langle h|\,e^{iH_0t_f/\hbar}\,e^{-iH(t_f-t_i)/\hbar}\,e^{-iH_0t_i/\hbar}\,|g\rangle\;}
$$

Read from right to left: from the incoming label out to the prepared state; through the collision; back to the detector's label. The free factors are not an extra assumption, just the definitions of what is prepared and what is detected. By §6.3, $\mathcal A_{hg}\to\langle h|g_{\rm out}\rangle$.

> [!question]- A real detector is a counter on the right, not a projection onto one packet. Does this still apply?
> Yes: sum $|\langle h|g_{\rm out}\rangle|^2$ over all right-moving labels and you get $P_{\rm T}$. At late times "on the right" and "moving right" are the same question. See §S6.1.

### 7.2 The interaction picture follows the label

Move the free factor from the bra onto the state:

$$
\mathcal A_{hg}=\langle h|\psi_I(t_f)\rangle,\qquad
|\psi_I(t)\rangle\equiv e^{iH_0t/\hbar}|\psi(t)\rangle=U_I(t,t_i)|g\rangle .
$$

If the barrier were switched off at time $t$, the particle would continue as $e^{-iH_0t'/\hbar}|\psi_I(t)\rangle$. So **$|\psi_I(t)\rangle$ is the label of the free motion the particle is on at time $t$**: $|g\rangle$ before the collision, $|g_{\rm out}\rangle$ after. To see how it changes, multiply the retarded form of §6.1 by $e^{iH_0t/\hbar}$:

$$
|\psi_I(t)\rangle=|g\rangle-\frac{i}{\hbar}\int_{-\infty}^{t}dt'\;V_I(t')\,|\psi_I(t')\rangle,\qquad
V_I(t)=e^{iH_0t/\hbar}Ve^{-iH_0t/\hbar}.
$$

This is the equation for $U_I$ in Scattering Theory 1, §2, and now we can read it: each term is the wave radiated at $t'$, folded back to $t=0$. The label collects radiation while the source is on and stops changing when the pulse is over. The Schrödinger state follows the particle along its whole path, and its phases keep turning forever; the interaction-picture state changes only during the collision.

> [!info]- The Born approximation
> Replace $|\psi_I(t')\rangle$ by $|g\rangle$ on the right-hand side: the source is driven by the incident wave alone. Derivations: §S6.2.

### 7.3 The $S$ operator

Letting the preparation recede into the past and the detection into the future,

$$
S|g\rangle\equiv\lim_{\substack{t_f\to+\infty\\ t_i\to-\infty}}U_I(t_f,t_i)\,|g\rangle=|g_{\rm out}\rangle,
\qquad\text{so}\qquad
S|k\rangle=\tau(|k|)\,|k\rangle+r(|k|)\,|{-k}\rangle .
$$

$S$ connects only equal energies and contains neither the apparatus nor the times: it describes the barrier alone. And this table on the reference states is all we need. Whatever packet a source prepares, its label is some $|g\rangle=\int dk\,g(k)|k\rangle$, and by linearity

$$
S|g\rangle=\int dk\;g(k)\,S|k\rangle .
$$

The experiment supplies $g(k)$; the barrier supplies $S|k\rangle$. This is why scattering theory computes $S$ on the reference states and never needs a particular packet.

### 7.4 The whole calculation in one picture

Step back, and the procedure of §§4–7 turns out to be an old one. Nobody describes a classical collision by where the particle is at $t=0$, in the middle of it. One gives the straight line it comes in on and the straight line it leaves on, and the collision is the rule that takes one line to the other. That is all $|g\rangle$, $|g_{\rm out}\rangle$, and $S$ are. Classically the rule can be drawn, and we draw it in two dimensions, where a trajectory can visibly bend; in our 1D problem the only outgoing directions are left and right.

> [!figure]
> ![[ST0_fig_classical_analog.svg|center|600]]
> Each observed ray is named by its free extension (dashed) into the interaction region near $t=0$: $|g\rangle$ for the incoming ray, $|h\rangle$ for the outgoing ray a detector accepts. The real trajectory (orange) bends inside the region. $S_{hg}=\langle h|S|g\rangle$ is the amplitude that the collision switches $g$ into $h$; in quantum mechanics $S|g\rangle$ is a superposition of many outgoing rays (grey fan).

Read the figure with the quantum steps in mind. Extend the incoming ray freely to $t=0$, as if nothing were there: that is the blue dot, $|g\rangle$. Do the same backwards with an outgoing ray: the green dot, $|h\rangle$. The real particle (orange) is at neither dot at $t=0$; it is in the middle of the bend.

- **Laboratory amplitude**, right to left: from the blue dot out to the source, along the real path, back along the green dashed line to the green dot.
- **Interaction picture**: the line tangent to the orange curve at time $t$, extended to $t=0$. It turns only inside the interaction region (blue circle), i.e. around $t=0$ (red circle).
- **$S$**: the switchboard in the red circle. A quantum particle leaves along several rays at once (grey fan).

### 7.5 Why the folded switchboard has a limit

Why fold at all? The Schrödinger operator $U=e^{-iH(t_f-t_i)/\hbar}$ also takes the prepared state to the final one, but it has no limit. Since $U=e^{-iH_0t_f/\hbar}\,U_I\,e^{iH_0t_i/\hbar}$ and $S$ connects only equal energies,

$$
\langle k'|U(t_f,t_i)|k\rangle\;\simeq\;\langle k'|S|k\rangle\;e^{-iE_k(t_f-t_i)/\hbar}.
$$

**The Schrödinger table is the $S$ table times a clock that never stops.** The clock is the free motion of the packet running off to infinity, and it is there even without a barrier. The interaction picture removes it at both ends: in the figure, both ends become dots near $t=0$ that stay put however early we prepare and however late we detect, and in between the label changes only while the particle is in the blue circle. That is why the limit exists, and what Scattering Theory 1, §2 means by "factoring out the known reference motion".

> [!important]- The label comes to rest only if the potential falls off faster than $1/r$
> This covers every interaction between ultracold atoms and molecules. For Coulomb the where-and-when part of the label drifts as $\ln t$, and $S$ must be defined relative to distorted reference motions. More on this, and on unitarity, the on-shell property, and the mathematics behind the picture: §S7.

---

## 8. How the steady state fits in

Back to the question of §3: how is the steady beam of §2 related to one particle that comes in and goes out?

### 8.1 Each component is transmitted with its stationary probability

Long after the collision the two outgoing packets are far apart, and free motion preserves norms, so by §6.3

$$
\boxed{\;P_{\rm T}=\int_0^\infty dk\;|g(k)|^2\,\mathcal T(k)\;}
$$

Each momentum component is transmitted with its own stationary probability, independently of the others, because the barrier never mixes energies. For a packet narrow in momentum, $P_{\rm T}\simeq\mathcal T(k_0)$.

> [!info]- Why the packet of §S3.4 gives $P_{\rm T}=0.496$, not $\mathcal T(k_0)=0.5$
> $P_{\rm T}$ averages $\mathcal T(k)$ over the packet, and at $k_0=\kappa$ the curve is concave. The difference belongs to the packet, not the barrier, and vanishes as $\sigma_k\to0$. See §S5.2.

### 8.2 A long packet looks like a steady state

That explains *why* the answer is right. To watch the steady state itself appear, make the packet narrower and narrower in momentum. It becomes longer in space and takes longer, $t_c=\sigma_x/v_0$, to pass. Close to the barrier, all the $\phi_k$ in the superposition look alike, and (§S5.3)

$$
\psi(x,t)\;\simeq\;A(t)\,\phi_{k_0}(x),\qquad A(t)=\sqrt{2\pi}\,\psi_0(0,t).
$$

**Near the barrier, a long packet is the stationary state $\phi_{k_0}$, switched on and off slowly** by the envelope $A(t)$. Sitting at the barrier, you would see three stages. As the front arrives, the source switches on and the reflected and transmitted waves build up. Then comes a long plateau in which nothing changes but a phase: this *is* the steady state of §2, with currents in the ratio $1:\mathcal R:\mathcal T$. Finally the tail passes and the source switches off.

The plateau also reconciles the two meanings of $\mathcal T$. The transmitted current is $\mathcal T(k_0)$ times the incident current. Integrated over the passage time, the incident current adds up to the whole packet, probability one, so the transmitted current adds up to $\mathcal T(k_0)$. **The steady flux fraction, integrated over the time the particle takes to pass, is the single-particle probability.** A steady beam is a long stream of such particles; as $\sigma_k\to0$ the switching is pushed to $t=\mp\infty$, and only the plateau remains.

### 8.3 A division of labour

So the two pictures do different jobs. **Packets** say what the experiment is: they give "before" and "after" a meaning, and the laboratory amplitude and the interaction picture are built on them. **Stationary states** carry the information about the barrier, $\tau$ and $r$, and are what one computes. The link is the boundary condition of §2: "nothing comes in from the right" builds in causality, the fact that scattered waves are caused by the source (§6.1). In the general theory $\phi_k$ is the scattering state $|\psi_k^{(+)}\rangle$ of Scattering Theory 1, §6, and the $+i0$ in its Lippmann–Schwinger equation is the same causality, written at fixed energy.

---

## 9. Summary

The stationary solution gives $\tau$ and $r$ for a steady beam. A particle needs a packet. Any packet can be named by a label $|g\rangle$, its free motion carried to $t=0$, and since $|g\rangle$ is a superposition of plane waves $|k\rangle$, it is enough to know what the barrier does to each $|k\rangle$. The barrier radiates only while the packet is on it, so the exact state follows $|g\rangle$ before the collision and $|g_{\rm out}\rangle$ after. The laboratory amplitude compares this with the detector's free motion; the interaction picture follows the label, and its limit is $S$. A long packet is a slowly switched stationary state, which is why the stationary calculation gives the single-particle answer.

| Scattering Theory 1 | here |
|---|---|
| §2, laboratory amplitude and $U_I$ | §4.2, §7.1–7.2 |
| §3, $S$ and energy conservation | §6.3, §7.3 |
| §§4–6, $+i0$, Lippmann–Schwinger, $\lvert\psi_k^{(+)}\rangle$ | §6.1, §8.3; §S3.1 |
| §7, Møller operators | §5, §7.5; §S7 |
