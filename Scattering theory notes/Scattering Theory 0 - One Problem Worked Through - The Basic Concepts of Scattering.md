This note is a prologue to [[Scattering Theory 1 - Asymptotic Dynamics and the Lippmann--Schwinger Equation|Scattering Theory 1]]. Section 2 of that note writes the result of a scattering experiment as a *laboratory amplitude*,

$$
\mathcal A_{hg}(t_f,t_i)=\langle h|\,e^{iH_0t_f/\hbar}\,e^{-iH(t_f-t_i)/\hbar}\,e^{-iH_0t_i/\hbar}\,|g\rangle ,
$$

and calls the operator between $\langle h|$ and $|g\rangle$ the interaction-picture evolution operator $U_I(t_f,t_i)$. The formula is correct, but on first reading it is not clear why it has to look like this. Why does the free evolution appear at both ends? What are the packets $|g\rangle$ and $|h\rangle$, which are called "labels" rather than states? And what is gained by the interaction picture?

Here we answer these questions with one concrete problem, the one-dimensional delta barrier. The argument has four steps.

1. Solve the problem the textbook way, as a stationary problem (§2).
2. Notice that scattering is a process in time, which the stationary solution does not obviously describe, and that a process in time requires a wave packet (§3–4).
3. Solve the time-dependent problem, and see why the stationary answer is nevertheless right (§5–6).
4. Read off from the solution why the laboratory amplitude has the form above, and what the interaction picture does (§7).

The delta barrier is simple enough that every step can be carried out exactly. The details, derivations, and checks are collected in the [[Scattering Theory 0 Supplement - Details of the Delta-Barrier Problem|supplement]]. They are not needed to follow the argument, and most of them are not needed later either: the following notes derive the general results in a form that also applies where no exact solution is available. References of the form §S$n$ point to the supplement.

Conventions: $\hbar$ and $m$ are kept in formulas. Transmission and reflection amplitudes are written $\tau(k)$ and $r(k)$, so that $t$ always means time.

---

## 1. The problem

A particle of mass $m$ moves on a line and meets a delta-function barrier at the origin:

$$
H=H_0+V,\qquad H_0=\frac{\hat p^2}{2m},\qquad V=\lambda\,\delta(\hat x),\qquad \lambda>0 .
$$

Away from $x=0$ the particle is exactly free; all of the scattering happens at a single point. The only scale the barrier introduces is the wavenumber $\kappa\equiv m\lambda/\hbar^2$. Since $\lambda>0$, there is no bound state.

The free Hamiltonian has the plane waves as eigenstates,

$$
\langle x|k\rangle=\frac{e^{ikx}}{\sqrt{2\pi}},\qquad
\langle k'|k\rangle=\delta(k'-k),\qquad
H_0|k\rangle=E_k|k\rangle,\quad E_k=\frac{\hbar^2k^2}{2m}.
$$

These are the **reference asymptotic states** of Scattering Theory 1, §1, with the general label $\alpha$ replaced by the wavenumber $k$: they describe the particle when it is far from the barrier and moves freely. $|k\rangle$ and $|{-k}\rangle$ have the same energy, so at each energy the particle can move freely to the right or to the left.

---

## 2. The stationary solution

The textbook approach looks for eigenstates of $H$ at energy $E_k>0$:

$$
-\frac{\hbar^2}{2m}\phi''(x)+\lambda\,\delta(x)\,\phi(x)=E_k\,\phi(x).
$$

For $x\neq0$ the solutions are $e^{\pm ikx}$. On each side of the barrier one of them runs toward the barrier and the other away from it. We put the source on the left: a wave $e^{ikx}$ comes in from the left, and nothing comes in from the right. With $k>0$,

$$
\phi_k(x)=\frac{1}{\sqrt{2\pi}}
\begin{cases}
e^{ikx}+r\,e^{-ikx}, & x<0,\\[2pt]
\tau\,e^{ikx}, & x>0,
\end{cases}
$$

with $e^{ikx}$ the incident wave, $r\,e^{-ikx}$ the reflected wave, and $\tau\,e^{ikx}$ the transmitted wave. The incoming amplitudes are what we choose to send in; the barrier then fixes the outgoing ones, $r$ and $\tau$ (§S1.1).

At the origin the wavefunction is continuous, and integrating the equation across $x=0$ shows that its derivative jumps (§S1.2):

$$
\phi(0^-)=\phi(0^+),\qquad
\phi'(0^+)-\phi'(0^-)=2\kappa\,\phi(0).
$$

Inserting $\phi_k$ gives $1+r=\tau$ and $ik\tau-ik(1-r)=2\kappa\tau$, so

$$
\boxed{\;\tau(k)=\frac{k}{k+i\kappa},\qquad r(k)=\frac{-i\kappa}{k+i\kappa}\;}
$$

The incident, reflected, and transmitted waves carry probability currents proportional to $1$, $|r|^2$, and $|\tau|^2$. Their ratios are the transmission and reflection probabilities (limits and remarks in §S1.3):

$$
\mathcal T(k)=|\tau|^2=\frac{k^2}{k^2+\kappa^2},\qquad
\mathcal R(k)=|r|^2=\frac{\kappa^2}{k^2+\kappa^2},\qquad
\mathcal R+\mathcal T=1 .
$$

Since $e^{-ikx}=e^{ik|x|}$ for $x<0$ and $\tau=1+r$, the solution can be written compactly as

$$
\phi_k(x)=\langle x|k\rangle+\frac{r(k)}{\sqrt{2\pi}}\,e^{ik|x|}:
$$

the plane wave $|k\rangle$ plus a wave that only runs away from the origin, on both sides. This is the general structure of a scattering solution, the incident reference state plus an outgoing scattered wave. (In three dimensions it becomes $e^{i\mathbf k\cdot\mathbf r}+f\,e^{ikr}/r$.)

**What the stationary solution describes.** $\phi_k$ is an eigenstate of $H$, so it only acquires a phase in time, and $|\phi_k(x,t)|^2$ does not change. The incident, reflected, and transmitted waves are all present, everywhere, at all times. Physically this is a **steady state**: a continuous beam shining on the barrier, like a laser on a partially reflecting mirror, long after it was switched on. $\mathcal R$ and $\mathcal T$ are the fractions of the incident flux that are reflected and transmitted.

In a typical textbook, the problem ends here.

---

## 3. A puzzle: where is the particle?

The words we used, "incident", "reflected", "transmitted", suggest a different picture. Send the particles one at a time. Each particle then has a *before* and an *after*: first it approaches from the left, then it hits the barrier, then it is found either on the right or back on the left. We say that it is transmitted with probability $\mathcal T$. This is a statement about a process in time, and the stationary state, which has no before and no after, does not contain it directly. Why, then, does the time-independent calculation give the right answer?

To find out, we have to pose the single-particle experiment as what it is, a time-dependent problem:

1. At an early time $t_i$, prepare a particle **far to the left** of the barrier, **moving to the right**.
2. Evolve it with the exact Hamiltonian $H$.
3. At a late time $t_f$, ask how much of it is on the right and how much on the left.

A plane wave cannot be such a particle. It has $|\langle x|k\rangle|^2=1/2\pi$ everywhere, so it is not "far to the left" at any time, and step 1 cannot even be stated. A localized particle is a superposition of plane waves, a **wave packet**. A packet contains a spread of energies, so it is not an eigenstate of $H$, and this is exactly where the time dependence of the process comes from.

---

## 4. Wave packets, and how to name them

### 4.1 A free packet

At the preparation time the particle is far from the barrier, where it moves freely. A free packet is a superposition of plane waves, each of which acquires its own phase:

$$
\psi_0(x,t)=\int dk\;g(k)\,e^{-iE_kt/\hbar}\,\langle x|k\rangle .
$$

Take $g(k)$ concentrated around some $k_0>0$, with a width $\sigma_k\ll k_0$, so that essentially all components move to the right. (A Gaussian $g$ is worked out explicitly in §S2.) Without any calculation, the packet then behaves as follows.

- **It moves.** Its center moves with the group velocity $v_0=\hbar k_0/m$.
- **It has a size.** At its narrowest its width is $\sigma_x\simeq1/2\sigma_k$, and it takes the time $t_c\equiv\sigma_x/v_0$ to pass a given point.
- **It focuses and spreads.** The components have slightly different speeds. If $g(k)$ is real, all of them are in phase at $x=0$, $t=0$, where the packet is narrowest. Before that the faster components are behind and catching up, so the packet is *converging*; afterwards they are in front, and it spreads.
- **It runs away faster than it spreads.** The center moves at $v_0$, while the width grows at most at the rate $\hbar\sigma_k/m$ set by the spread of velocities. The ratio is $k_0/\sigma_k\gg1$. So a packet with only positive momenta is found entirely at $x<0$ as $t\to-\infty$ and entirely at $x>0$ as $t\to+\infty$.

### 4.2 The label $|g\rangle$

Now name the packet that the source prepares. It is some state $|\psi(t_i)\rangle$, far to the left at the time $t_i$. While it is far from the barrier it moves freely, so we may carry it forward with $H_0$ to the reference time $t=0$ and give it a name there:

$$
|g\rangle\equiv e^{iH_0t_i/\hbar}|\psi(t_i)\rangle ,
\qquad\text{equivalently}\qquad
|\psi(t_i)\rangle=e^{-iH_0t_i/\hbar}|g\rangle .
$$

The relation is one-to-one, so nothing is lost. This is the construction of Scattering Theory 1, §2, and three points about it are essential.

- **$|g\rangle$ is not the state of the real particle at $t=0$.** It is what the particle would look like at $t=0$ if there were no barrier. With the barrier present, the real particle at $t=0$ is in the middle of the collision and looks nothing like $|g\rangle$ (§5.3).
- **$|g\rangle$ does not depend on the preparation time.** Making $t_i$ earlier moves the prepared state $e^{-iH_0t_i/\hbar}|g\rangle$ off toward $x=-\infty$ and makes it wider without limit, but it is still the same free motion, with the same name at $t=0$. So $|g\rangle$ is a **label** for the whole incoming free motion $\{e^{-iH_0t/\hbar}|g\rangle\}_{t\in\mathbb R}$, which the real particle follows before the collision. It stays fixed while the physical prepared state has no limit.
- **What the label contains.** $|g(k)|$ says which momenta are present and with what weight. The phase of $g(k)$ says where and when the free packet is narrowest; a real $g$ is the convenient choice "at the origin, at $t=0$" (§S2.3).

Why name the packet this way? Because time evolution is linear. Once we know what happens to each reference state $|k\rangle$, we know what happens to every packet; $g(k)$ only says how much of each $|k\rangle$ the packet contains. The packet is needed to give "before" and "after" a meaning, but the content of the problem is what happens to each $|k\rangle$. Writing the packet as a superposition of reference states at a fixed reference time is what makes this reduction possible, as the next section shows.

---

## 5. The time-dependent solution

We now solve the actual problem: the state that equals $e^{-iH_0t_i/\hbar}|g\rangle$ at a very early time $t_i$, evolved with $H$.

### 5.1 The solution

The free packet is a superposition of eigenstates of $H_0$ with coefficients $g(k)$. With the barrier, the eigenstates are the $\phi_k$ of §2, and each of them contains the plane wave $\langle x|k\rangle$ as its incident part. So keep the same coefficients and the same phases, and replace each plane wave by the eigenstate whose incident part it is:

$$
\boxed{\;\psi(x,t)=\int_0^\infty dk\;g(k)\,e^{-iE_kt/\hbar}\,\phi_k(x)\;}
$$

(The integral runs over $k>0$ because $g$ is negligible at $k<0$.) This solves the time-dependent Schrödinger equation exactly, because each $\phi_k$ is an eigenstate of $H$. A solution is fixed by its value at one time, so it remains to check that it is the state the source prepared, i.e. that it agrees with $e^{-iH_0t/\hbar}|g\rangle$ at early times. Using the compact form of $\phi_k$, it is the free packet plus a scattered wave:

$$
\psi(x,t)=\psi_0(x,t)+\psi_{\rm sc}(x,t),\qquad
\psi_{\rm sc}(x,t)=\int_0^\infty\frac{dk}{\sqrt{2\pi}}\;r(k)\,g(k)\,e^{ik|x|-iE_kt/\hbar}.
$$

(Why only the left-incident eigenstates take part is derived in §S4, starting from the general solution.)

### 5.2 Before and after the collision

Look at the scattered wave on each side separately. For $x>0$, $e^{ik|x|}=e^{ikx}$, so there $\psi_{\rm sc}$ is a free packet with momentum amplitude $r(k)g(k)$, moving to the right. For $x<0$, $e^{ik|x|}=e^{-ikx}$, so there it is the mirror image, a free packet with amplitude $r(k)g(k)$ at momentum $-k$, moving to the left. Each is kept only on its own half line. By §4.1, the right-moving packet is centered near $x=v_0t$, the left-moving one near $x=-v_0t$.

**Before the collision**, $t\ll-t_c$, the right-moving packet lies at $x<0$, where it is cut off, and the left-moving one lies at $x>0$, where it is cut off as well. So $\psi_{\rm sc}\to0$, and

$$
\big\|\,\psi(t)-e^{-iH_0t/\hbar}|g\rangle\,\big\|\;\xrightarrow{\;t\to-\infty\;}\;0 .
$$

The solution coincides with the prepared state, so it is **the state of the experiment** (§S3.2 takes the limit carefully).

**After the collision**, $t\gg t_c$, both scattered packets have moved to the side where they are kept, and the free packet $\psi_0$ has moved to $x>0$. On the right, $\psi_0$ adds to the forward-scattered packet, and since $1+r=\tau$ the sum is a free packet with amplitude $\tau(k)g(k)$: **the transmitted wave is the incident wave plus the forward-scattered wave.** On the left, the backward-scattered packet is the reflected wave. Altogether

$$
\big\|\,\psi(t)-e^{-iH_0t/\hbar}|g_{\rm out}\rangle\,\big\|\;\xrightarrow{\;t\to+\infty\;}\;0,
\qquad
\boxed{\;|g_{\rm out}\rangle=\int_0^\infty dk\;g(k)\Big[\tau(k)\,|k\rangle+r(k)\,|{-k}\rangle\Big]\;}
$$

Three points are worth noting.

- **Before and after, the particle is free.** Long after the collision it is again a free packet, but a different one. Like $|g\rangle$, $|g_{\rm out}\rangle$ is a fixed ket, the label of the outgoing free motion. The collision changes the label from $|g\rangle$ to $|g_{\rm out}\rangle$, and the norm is preserved because $|\tau|^2+|r|^2=1$.
- **Energy is conserved component by component.** Each $|k\rangle$ feeds only $|k\rangle$ and $|{-k}\rangle$, the two free states with the same energy.
- **Incoming and outgoing now mean before and after.** In the stationary solution all waves coexist. In time, the incident wave is present only before the collision, and the reflected and transmitted waves only after it. Physically, the scattered wave is radiated by the barrier, which acts as a point source while the packet is on it; before that, nothing has been radiated. This picture, and the retarded form of $\psi_{\rm sc}$ that expresses it, are in §S3.1.

### 5.3 During the collision

The figure shows the exact solution, computed directly from the boxed formula of §5.1.

![[ST0_fig_exact_solution.png|center|720]]

*Exact $|\psi(x,t)|$ for $k_0=\kappa$, where $\mathcal T(k_0)=\mathcal R(k_0)=\tfrac12$, with $\sigma_x=4$ ($\hbar=m=1$). (a) Spacetime picture. The red dashed line is the center of the free motion $e^{-iH_0t/\hbar}|g\rangle$, i.e. what the particle would do without the barrier. (b) Snapshots of $|\psi(x,t)|^2$ (black) and of the free packet (red dashed). At $t=-40$ the two coincide. At $t=0$ the red curve is $|\langle x|g\rangle|^2$ itself, and the real particle looks nothing like it. At $t=+40$ the real particle is a transmitted plus a reflected packet, each carrying about half the probability.*

For $|t|\lesssim t_c$ the state is neither the incoming packet nor a pair of outgoing ones. On the left, the incident and reflected waves overlap and interfere, producing fringes with spacing $\pi/k_0$; on the right, the transmitted wave is building up. This is what the real particle looks like at $t=0$, and it is not $|g\rangle$. (Numerical checks: §S3.4.)

---

## 6. Why the stationary answer works

Long after the collision the transmitted and reflected packets are far apart, so the probability of finding the particle on the right is the norm squared of the transmitted packet, which free motion does not change:

$$
\boxed{\;P_{\rm T}=\int_0^\infty dk\;|g(k)|^2\,|\tau(k)|^2=\int_0^\infty dk\;|g(k)|^2\,\mathcal T(k)\;}
$$

and similarly $P_{\rm R}=\int_0^\infty dk\,|g|^2\mathcal R$. This answers the question of §3. **Each momentum component is transmitted with its own stationary probability**, independently of the others, because a component $k$ feeds only $\pm k$ and different energies never mix. For a packet narrow in momentum, $\mathcal T(k)$ hardly varies across it and $P_{\rm T}\simeq\mathcal T(k_0)$. The stationary calculation is right because it is right for every component, and a narrow packet is essentially one component.

Neither the preparation time, nor the detection time, nor the phase of $g$ appears in $P_{\rm T}$; the apparatus enters only through $|g(k)|^2$. Conversely, a steady beam is the limit of longer and longer packets: near the barrier, a long packet is the stationary state $\phi_{k_0}$, switched on and off slowly (§S5). So the two pictures describe the same physics, with a division of labour. **Packets** give "before" and "after" their meaning and say what the experiment is. **Stationary states** carry the information about the barrier, $\tau(k)$ and $r(k)$, and are what one actually computes.

---

## 7. The laboratory amplitude and the interaction picture

We now look back at the calculation and ask what structure it had. This is where the formulas of Scattering Theory 1, §2 come from.

### 7.1 The detector's question

A detector at time $t_f$ asks for the amplitude $\langle\varphi|\psi(t_f)\rangle$ of some accepted state $|\varphi\rangle$. A fixed $|\varphi\rangle$ will not do: as $t_f\to\infty$ the packet simply flies past it, and the overlap goes to zero. What a detector really fixes is an outgoing free motion, and we name it exactly as we named the source's, by a label $|h\rangle$ at $t=0$. The accepted state at $t_f$ is then $e^{-iH_0t_f/\hbar}|h\rangle$, and the amplitude is

$$
\boxed{\;\mathcal A_{hg}(t_f,t_i)=\langle h|\,e^{iH_0t_f/\hbar}\,e^{-iH(t_f-t_i)/\hbar}\,e^{-iH_0t_i/\hbar}\,|g\rangle\;}
$$

Read it from right to left: from the incoming label to the prepared state, by free motion; through the collision, with $H$; back from the late state to the detector's label, by free motion. **The free factors at the two ends are not an addition to the physics.** They are the definitions of what the source prepares and what the detector accepts, in terms of labels. Without the barrier they cancel and $\mathcal A_{hg}=\langle h|g\rangle$. With it, §5.2 gives $\mathcal A_{hg}\to\langle h|g_{\rm out}\rangle$ as $t_i\to-\infty$, $t_f\to+\infty$. For example, a detector that accepts the transmitted packet finds $|\mathcal A_{hg}|^2\to P_{\rm T}$ (§S6.1).

### 7.2 The interaction picture follows the label

The same amplitude can be written by moving the free factor from the bra onto the state:

$$
\mathcal A_{hg}=\langle h|\psi_I(t_f)\rangle,\qquad
|\psi_I(t)\rangle\equiv e^{iH_0t/\hbar}|\psi(t)\rangle=U_I(t,t_i)|g\rangle .
$$

What is $|\psi_I(t)\rangle$? If the barrier were switched off at time $t$, the particle would continue freely as $e^{-iH_0(t'-t)/\hbar}|\psi(t)\rangle=e^{-iH_0t'/\hbar}|\psi_I(t)\rangle$. So **$|\psi_I(t)\rangle$ is the label of the free motion the particle is on at time $t$.** By §5.2,

$$
|\psi_I(t)\rangle\;\xrightarrow{\;t\to-\infty\;}\;|g\rangle,\qquad
|\psi_I(t)\rangle\;\xrightarrow{\;t\to+\infty\;}\;|g_{\rm out}\rangle .
$$

The label changes only during the collision. Differentiating gives $i\hbar\,\partial_t|\psi_I\rangle=V_I(t)|\psi_I\rangle$ with $V_I(t)=e^{iH_0t/\hbar}Ve^{-iH_0t/\hbar}$, or in integral form

$$
|\psi_I(t)\rangle=|g\rangle-\frac{i}{\hbar}\int_{t_i}^{t}dt'\;V_I(t')\,|\psi_I(t')\rangle ,
$$

which is the equation for $U_I$ in Scattering Theory 1, §2. For the delta barrier $V_I(t)=\lambda\,\delta(\hat x+\hat pt/m)$, the barrier as seen from the free motion. On a label near the origin with momentum near $\hbar k_0$, $\hat x+\hat pt/m\approx v_0t$, so $V_I(t)$ acts only for $|t|\lesssim t_c$, while the free packet named by the label is on the barrier. (Derivations and the Born approximation: §S6.2.)

The two pictures differ in what they follow. The **Schrödinger picture** follows the particle along its whole path, from the source to the detector, and its state never settles: in momentum space $\langle k|\psi(t)\rangle=e^{-iE_kt/\hbar}\langle k|\psi_I(t)\rangle$ keeps rotating long after the collision is over. The **interaction picture** removes the free motion, which we already know, by folding it back to the reference time. What remains is the change of label, and it happens only during the collision.

### 7.3 The $S$ operator

Let the preparation recede into the remote past and the detection into the remote future:

$$
S|g\rangle\equiv\lim_{\substack{t_f\to+\infty\\ t_i\to-\infty}}U_I(t_f,t_i)\,|g\rangle=|g_{\rm out}\rangle,
\qquad
\mathcal A_{hg}\;\longrightarrow\;\langle h|S|g\rangle .
$$

Since this holds for every $|g\rangle$, the packet can be stripped off:

$$
S|k\rangle=\tau(|k|)\,|k\rangle+r(|k|)\,|{-k}\rangle ,
$$

shown for $k>0$ and, by the mirror symmetry of the barrier, valid for $k<0$ as well. $S$ connects only states of the same energy and attaches an amplitude to each switch of direction. It contains neither the apparatus, $|g\rangle$ and $|h\rangle$, nor the times $t_i$ and $t_f$: it describes the barrier alone. (The kernel $\langle k'|S|k\rangle=\tau\,\delta(k'-k)+r\,\delta(k'+k)$ is a distribution; numbers appear only after smearing with normalizable labels.)

### 7.4 The whole calculation in one picture

The structure is easiest to see in classical scattering, which is handled in much the same way. The figure is drawn for a classical particle scattered in two dimensions.

> [!figure]
> ![[Classical analog.svg|center|600]]
> Each observed ray is named by its free extension (dashed) into the interaction region near $t=0$: $|g\rangle$ for the incoming ray, $|h\rangle$ for the outgoing ray a detector accepts. The real trajectory (orange) bends inside the region. $S_{hg}=\langle h|S|g\rangle$ is the amplitude that the collision switches $g$ into $h$; in quantum mechanics $S|g\rangle$ is a superposition of many outgoing rays (grey fan).

Long before and long after the collision the particle moves freely along straight rays. Each ray is named by extending it freely to the reference time $t=0$ (dashed lines): the blue dot is the incoming label $|g\rangle$ (§4.2), and the green dot is the label $|h\rangle$ of the outgoing ray that the detector accepts (§7.1). The real particle does not follow the dashed lines. It moves along the orange curve, and at $t=0$ it is at neither dot, just as the real packet at $t=0$ looks nothing like $|g\rangle$ (§5.3).

Every element of the calculation has its place in the figure.

- **The laboratory amplitude**, read from right to left: from the blue dot out along its dashed line to the source at $t_i$ ($e^{-iH_0t_i/\hbar}$); along the real path to $t_f$ ($e^{-iH(t_f-t_i)/\hbar}$); back along the green dashed line to the green dot ($e^{iH_0t_f/\hbar}$), where it is compared with $|h\rangle$.
- **The interaction-picture state** $|\psi_I(t)\rangle$: at time $t$, take the straight line tangent to the orange curve and extend it to $t=0$. Before the collision this always gives the blue dot, after it an outgoing label. The tangent line turns only while the particle is in the interaction region (blue circle), i.e. in a time window around $t=0$ (red circle).
- **The $S$ operator** is the switchboard in the red circle: for each incoming ray, how much goes into each outgoing ray.
- **The quantum difference.** A classical particle leaves along one outgoing ray, a quantum particle along several at once (grey fan), here the transmitted and the reflected ray. A detector selects one of them, which is why the green ray is singled out.

A label specifies the whole free motion, not only its direction: $|g(k)|$ gives the speeds and directions, and the phase of $g(k)$ gives where and when, much like an impact parameter. This is why the green extension need not pass exactly through the blue dot. In our problem the offset is the small time delay stored in the $k$-dependence of the phase of $r(k)$ (§S3.1). The classical version of the interaction picture, Lagrange's variation of constants, is written out in §S6.3.

### 7.5 Why the folded switchboard has a limit

Nothing stops us from building a switchboard directly in the Schrödinger picture. The operator $U(t_f,t_i)=e^{-iH(t_f-t_i)/\hbar}$ takes whatever the source prepared at $t_i$ to whatever is there at $t_f$, and at finite times it is perfectly well defined and unitary. But it has no limit. Since $U=e^{-iH_0t_f/\hbar}\,U_I\,e^{iH_0t_i/\hbar}$ exactly and $U_I\to S$,

$$
\langle k'|U(t_f,t_i)|k\rangle\;\simeq\;e^{-iE_{k'}t_f/\hbar}\,\langle k'|S|k\rangle\,e^{iE_kt_i/\hbar}
=\langle k'|S|k\rangle\;e^{-iE_k(t_f-t_i)/\hbar},
$$

where the last step uses that $S$ connects only $k'=\pm k$, so $E_{k'}=E_k$. **The Schrödinger table is the $S$ table times a clock** that never stops turning. A $k$-dependent phase records where and when the packet is (§4.2), and this ever-growing phase is nothing but the packet running off along the rays. None of it comes from the barrier: without it, $U=e^{-iH_0(t_f-t_i)/\hbar}$ is the identity table times the same clock, and it has no limit either. **What fails to converge is the free motion.**

The interaction picture removes exactly this clock at both ends. In the figure, $e^{-iH_0t_i/\hbar}$ carries the blue dot out along its dashed line to the source, and $e^{iH_0t_f/\hbar}$ carries the late packet back along the green dashed line to its dot. What is left is a table indexed by labels, and the labels sit in the red circle, near the origin at $t=0$, however early the preparation and however late the detection:

- moving $t_i$ earlier does not move the blue dot (§4.2);
- moving $t_f$ later does not move the green dot, because once the particle has left the blue circle it moves freely, and a free motion has a fixed label (§7.2).

The label changes only while the particle is inside the blue circle, which it crosses in a finite time. So $U_I(t_f,t_i)|g\rangle$ stops changing once $t_i$ lies before the entry and $t_f$ after the exit, and taking the limit only removes the last bit of the tails. The folded table can be read off entirely inside the red circle, it has no way of knowing $t_i$ or $t_f$, and that is why it has a limit.

This is the content of the remark in Scattering Theory 1, §2 that the interaction picture is "the laboratory amplitude written after factoring out the known reference motion". The known motion is the only thing that never settles; once it is factored out at both ends, only the switch in the red circle is left. The same picture shows why $S$ is on shell and unitary, and when the argument fails: if the potential falls off too slowly, as the Coulomb potential does, the blue circle has no edge and the label never quite comes to rest. These points are discussed in §S7.

---

## 8. Summary

1. The stationary solution (§2) describes a steady beam: the incident plane wave plus an outgoing scattered wave, with amplitudes $\tau(k)$ and $r(k)$.
2. A single particle with a "before" and an "after" needs a wave packet (§3). The packet is named by its free motion at a reference time, the label $|g\rangle$ (§4), which stays fixed when the prepared state runs off to infinity.
3. The exact state is a superposition of stationary states with the same coefficients $g(k)$ (§5). Before the collision it is the free motion of $|g\rangle$, after it the free motion of $|g_{\rm out}\rangle$. Each momentum component is transmitted with its stationary probability, which is why the stationary answer works (§6).
4. The laboratory amplitude compares the exact state with the detector's free motion; its free factors define what is prepared and what is detected (§7.1). The interaction-picture state is the label of the current free motion, which changes only during the collision (§7.2). Its long-time limit is $S$ (§7.3), whereas the Schrödinger evolution differs from $S$ by a clock that never stops (§7.5).

[[Scattering Theory 1 - Asymptotic Dynamics and the Lippmann--Schwinger Equation|Scattering Theory 1]] states the same structure for a general $H=H_0+V$, where $H_0$ may include internal states and the label $k$ becomes a set of channel quantum numbers $\alpha$:

| Scattering Theory 1 | here |
|---|---|
| §1, reference asymptotic states | §1 |
| §2, laboratory amplitude and $U_I$ | §4.2, §7.1–7.2 |
| §3, $S$ and the energy delta function | §5.2, §7.3; §S3.3 |
| §§4–6, $G_0^{(\pm)}$, $T$, Lippmann–Schwinger, $\lvert\psi_\alpha^{(+)}\rangle$ | §2: $\phi_k=\lvert\psi_k^{(+)}\rangle$; §S3.1: the $+i0$ is the retardation |
| §7, Møller operators | §5.1: the exact state with incoming label $\lvert g\rangle$ is $\int dk\,g(k)\lvert\psi_k^{(+)}\rangle$; §7.5 and §S7: why the limits exist |
