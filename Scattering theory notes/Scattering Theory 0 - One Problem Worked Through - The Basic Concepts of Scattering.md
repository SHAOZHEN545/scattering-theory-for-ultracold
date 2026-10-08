This note is a prologue to [[Scattering Theory 1 - Asymptotic Dynamics and the Lippmann--Schwinger Equation|Scattering Theory 1]], which introduces reference asymptotic states, laboratory amplitudes, the interaction-picture comparison, $S$, $T$, resolvents, and Møller operators in a deliberately generic language. That language is correct, but on first reading it is not clear why it has to look the way it does.

Here we take one problem, the one-dimensional repulsive delta potential, and work through it concretely. We start from the familiar textbook solution, which treats scattering as a stationary problem. That solution is clean, but it leaves a question open: scattering is a process in time. A particle comes in, hits the potential, and goes out. Why should a time-independent calculation describe it? Answering this question step by step leads, without any extra assumptions, to the objects of Scattering Theory 1.

Conventions: $\hbar$ and $m$ are kept in formulas. Transmission and reflection amplitudes are written $\tau(k)$ and $r(k)$, so that $t$ always means time.

---

## 1. The problem

A particle of mass $m$ moves on a line and meets a delta-function barrier at the origin:

$$
H=H_0+V,\qquad H_0=\frac{\hat p^2}{2m},\qquad V=\lambda\,\delta(\hat x),\qquad \lambda>0 .
$$

The potential is an idealized barrier: infinitely high and infinitely thin, with finite "strength" $\lambda=\int V\,dx$. Away from $x=0$ the particle is exactly free. All of the scattering happens at a single point, and this is what makes the problem easy to solve completely.

The only scale the potential introduces is the wavenumber

$$
\kappa\equiv\frac{m\lambda}{\hbar^2}.
$$

We take $\lambda>0$, so there is no bound state.

The free Hamiltonian $H_0$ has the plane waves as eigenstates:

$$
\hat p|k\rangle=\hbar k|k\rangle,\qquad
\langle x|k\rangle=\frac{e^{ikx}}{\sqrt{2\pi}},\qquad
\langle k'|k\rangle=\delta(k'-k),\qquad
H_0|k\rangle=E_k|k\rangle,\quad E_k=\frac{\hbar^2k^2}{2m}.
$$

These are the **reference asymptotic states** of Scattering Theory 1, §1, with the general label $\alpha$ replaced by the wavenumber $k$. They describe the particle when it is far from the potential and moves freely. Note that $|k\rangle$ and $|{-k}\rangle$ have the same energy: at each energy there are two ways to move freely, to the right and to the left.

---

## 2. The stationary solution

A common textbook approach looks for eigenstates of $H$ at a given energy $E_k>0$:

$$
-\frac{\hbar^2}{2m}\phi''(x)+\lambda\,\delta(x)\,\phi(x)=E_k\,\phi(x).
$$

### 2.1 Away from the origin: incoming and outgoing waves

For $x\neq0$ the equation is $\phi''+k^2\phi=0$, with solutions $e^{\pm ikx}$, $k>0$. The general solution is

$$
\phi(x)=\frac{1}{\sqrt{2\pi}}
\begin{cases}
A\,e^{ikx}+B\,e^{-ikx}, & x<0,\\[2pt]
C\,e^{ikx}+D\,e^{-ikx}, & x>0.
\end{cases}
$$

Each term carries its own probability current, $e^{ikx}$ toward $+x$ and $e^{-ikx}$ toward $-x$. What matters is whether that current points **toward the barrier or away from it**:

|       | toward the barrier (incoming) | away from the barrier (outgoing) |
| ----- | ----------------------------- | -------------------------------- |
| $x<0$ | $A\,e^{ikx}$                  | $B\,e^{-ikx}$                    |
| $x>0$ | $D\,e^{-ikx}$                 | $C\,e^{ikx}$                     |

> [!NOTE]- Derivation: each term carries its own current
> The probability current $j=\frac{\hbar}{m}\,\mathrm{Im}\big[\phi^*\phi'\big]$ of the general solution is
> $$
> j=\frac{\hbar k}{m}\,\frac{|A|^2-|B|^2}{2\pi}\quad(x<0),\qquad
> j=\frac{\hbar k}{m}\,\frac{|C|^2-|D|^2}{2\pi}\quad(x>0).
> $$
> To see this for $x<0$: with $\phi=(A\,e^{ikx}+B\,e^{-ikx})/\sqrt{2\pi}$ and $\phi'=ik(A\,e^{ikx}-B\,e^{-ikx})/\sqrt{2\pi}$,
> $$
> 2\pi\,\phi^*\phi'=ik\Big[|A|^2-|B|^2+\big(z-z^*\big)\Big],\qquad z\equiv AB^*e^{2ikx}.
> $$
> The cross term $z-z^*=2i\,\mathrm{Im}\,z$ is purely imaginary, so $ik(z-z^*)=-2k\,\mathrm{Im}\,z$ is real and drops out of the imaginary part. Hence $\mathrm{Im}\big[2\pi\,\phi^*\phi'\big]=k\big(|A|^2-|B|^2\big)$. The same steps with $C,D$ give the current for $x>0$.

The two matching conditions at the origin (§2.2) fix the two outgoing amplitudes once the two incoming ones are given: **we choose what is sent in, and the barrier determines what comes out.** A source on the left sends in only from the left, $A=1$, $D=0$. Renaming $B\equiv r$ and $C\equiv\tau$, this is the solution

$$
\phi_k(x)=\frac{1}{\sqrt{2\pi}}
\begin{cases}
e^{ikx}+r\,e^{-ikx}, & x<0,\\[2pt]
\tau\,e^{ikx}, & x>0,
\end{cases}
$$

with $e^{ikx}$ the incident wave, $r\,e^{-ikx}$ the reflected wave, and $\tau\,e^{ikx}$ the transmitted wave.

> [!INFO]- Why this boundary condition, and why nothing is lost by choosing it
> *Counting.* There are four coefficients and two matching conditions at the origin, so at each energy there are two independent solutions. The table gives a natural way to parametrize them: the incoming amplitudes $(A,D)$ are what is sent in, from the left or from the right, and the outgoing amplitudes $(B,C)$ are what the barrier sends back out. The two matching conditions are exactly enough to fix $(B,C)$ once $(A,D)$ are given.
>
> *Left incidence.* A source only on the left means that nothing arrives from $x=+\infty$, so $D=0$. Setting $A=1$ fixes the normalization of the incident wave, so that $r$ and $\tau$ are amplitudes relative to it.
>
> *Generality.* The opposite choice $A=0$, $D=1$ describes a source on the right, and every solution at this energy is a superposition of the two.
>
> *Incoming and outgoing in time.* The words "incoming" and "outgoing" were justified here by the direction of the current in a stationary state. In a later section we will see the same classification appear directly in time: in a wave packet built from these terms, the $A$ and $D$ parts are present only before the collision, and the $B$ and $C$ parts only after it.

### 2.2 At the origin: the matching conditions

The wavefunction is continuous at the origin, while integrating the equation over $(-\varepsilon,\varepsilon)$ and letting $\varepsilon\to0$ gives a jump of its derivative:

$$
\phi(0^-)=\phi(0^+),\qquad
\phi'(0^+)-\phi'(0^-)=\frac{2m\lambda}{\hbar^2}\,\phi(0)=2\kappa\,\phi(0).
$$

The derivative is discontinuous unless $\phi(0)=0$.

> [!NOTE]- Derivation: the derivative jump
> Integrate both sides over $(-\varepsilon,\varepsilon)$:
> $$
> -\frac{\hbar^2}{2m}\Big[\phi'(\varepsilon)-\phi'(-\varepsilon)\Big]+\lambda\,\phi(0)=E_k\int_{-\varepsilon}^{\varepsilon}\phi\,dx .
> $$
> The first term is $\int\phi''dx$; the second uses $\int\delta(x)\phi(x)dx=\phi(0)$. Since $\phi$ is continuous, hence bounded near $0$, the right-hand side vanishes as $\varepsilon\to0$, which gives the jump condition.

> [!INFO]- Remark: why a wavefunction must be continuous, while its derivative may jump
> *In this equation.* A jump of $\phi$ at the origin would put $\delta'(x)$ into $\phi''$, and nothing in the equation could balance it: the potential term only supplies $\delta(x)$.
>
> The argument below is more general: $\psi(x)=\langle x|\psi\rangle$ denotes a **general** wavefunction, not only the $\phi_k$ of this section, and $V(x)$ is a general potential.
>
> *Continuity of $\psi$ holds for every state of finite energy, whatever the potential.* The kinetic energy is $\frac{\hbar^2}{2m}\int|\psi'|^2dx$. If $\psi$ jumped at some point $x_0$, $\psi'$ would contain a term proportional to $\delta(x-x_0)$, and $\int|\psi'|^2dx$ would contain $\int\delta(x-x_0)^2dx=\int\delta(x-x_0)\delta(x-x_0)dx=\delta(x_0-x_0)=\infty$. (For a non-normalizable state such as $\phi_k$, apply the same argument to the kinetic energy in a finite interval around $x_0$.)
>
> *A jump of $\psi'$ costs nothing.* It puts a $\delta$ into $\psi''$, but $\psi'$ itself stays bounded and $\int|\psi'|^2dx$ stays finite. Whether $\psi'$ actually jumps is decided by the Schrödinger equation. For an energy eigenfunction, $H\psi=E\psi$, the same integration as above gives
> $$
> \psi'(x_0^+)-\psi'(x_0^-)=\frac{2m}{\hbar^2}\lim_{\varepsilon\to0}\int_{x_0-\varepsilon}^{x_0+\varepsilon}\big[V(x)-E\big]\psi(x)\,dx .
> $$
> For any bounded $V$ the integral vanishes and $\psi'$ is continuous. Only a potential as singular as $\delta(x-x_0)$ produces a jump.
>
> *The current.* For an energy eigenfunction $\partial_t|\psi|^2=0$, so the continuity equation gives $\partial_xj=0$: the current must be the same on both sides of $x_0$. This does not forbid a jump of $\psi'$; it constrains it. For our barrier,
> $$
> j(0^+)-j(0^-)=\frac{\hbar}{m}\,\mathrm{Im}\big[\psi^*(0)\cdot2\kappa\,\psi(0)\big]=\frac{2\hbar\kappa}{m}\,\mathrm{Im}\,|\psi(0)|^2=0,
> $$
> because the coefficient $2\kappa$ is real, which in turn is because $V$ is Hermitian. Probability conservation requires the jump to be proportional to $\psi(0)$ with a real coefficient, not the derivative to be continuous.

### 2.3 Solving for $r$ and $\tau$

Inserting $\phi_k$, continuity and the jump condition become $1+r=\tau$ and $ik\tau-ik(1-r)=2\kappa\tau$, with the solution

$$
\boxed{\;\tau(k)=\frac{k}{k+i\kappa},\qquad r(k)=\frac{-i\kappa}{k+i\kappa}\;}
$$

> [!NOTE]- Derivation: the matching equations and their solution
> From the explicit form of $\phi_k$,
> $$
> \phi_k(0^-)=\frac{1+r}{\sqrt{2\pi}},\quad
> \phi_k(0^+)=\frac{\tau}{\sqrt{2\pi}},\qquad
> \phi_k'(0^-)=\frac{ik(1-r)}{\sqrt{2\pi}},\quad
> \phi_k'(0^+)=\frac{ik\tau}{\sqrt{2\pi}} .
> $$
> Continuity equates the first two, giving $1+r=\tau$. The jump condition, with $\phi_k(0)=\tau/\sqrt{2\pi}$, gives $ik\tau-ik(1-r)=2\kappa\tau$. The common factor $1/\sqrt{2\pi}$ drops out.
>
> Substituting $r=\tau-1$ into the second equation gives $2ik\tau-2ik=2\kappa\tau$, i.e. $\tau(ik-\kappa)=ik$, so $\tau=k/(k+i\kappa)$ and $r=\tau-1=-i\kappa/(k+i\kappa)$.

**Transmission and reflection probabilities.** The incident, reflected, and transmitted waves carry currents proportional to $1$, $|r|^2$, and $|\tau|^2$ (§2.1). Their ratios are

$$
\mathcal T=|\tau|^2=\frac{k^2}{k^2+\kappa^2},\qquad
\mathcal R=|r|^2=\frac{\kappa^2}{k^2+\kappa^2},\qquad
\mathcal R+\mathcal T=1 .
$$

> [!INFO]- Remarks: conservation, scales, and limits
> *Conservation.* $\mathcal R+\mathcal T=1$ is the equality of the currents on the two sides, $1-|r|^2=|\tau|^2$. (The currents themselves are $\hbar k/m$, $|r|^2\hbar k/m$, and $|\tau|^2\hbar k/m$, up to the common factor $1/2\pi$.)
>
> *The only scale.* $\mathcal T$ and $\mathcal R$ depend on $k/\kappa$ alone. In terms of energies, $\kappa^2/k^2=m\lambda^2/2\hbar^2E_k$: the barrier has a characteristic energy $m\lambda^2/2\hbar^2$, and only the ratio of $E_k$ to it matters.
>
> *Limits.* For $\kappa\to0$ there is no barrier and $\mathcal T\to1$. At low energy, $k\ll\kappa$, the barrier acts like a hard wall, $r\to-1$, and $\phi$ has a node at the origin. At high energy, $k\gg\kappa$, the barrier becomes transparent.
>
> *Barrier vs. well.* $\mathcal T$ and $\mathcal R$ contain $\lambda$ only through $\lambda^2$, so they are unchanged for a delta well, $\lambda\to-\lambda$. (The amplitudes $r,\tau$ do change, and the well also has a bound state, which is not part of the scattering problem.)

Since $e^{-ikx}=e^{ik|x|}$ for $x<0$ and $\tau=1+r$, the solution can be written compactly as

$$
\phi_k(x)=\frac{1}{\sqrt{2\pi}}\Big[e^{ikx}+r(k)\,e^{ik|x|}\Big]:
$$

the plane wave $\langle x|k\rangle$ plus a wave that only runs away from the origin, on both sides. This is the general structure of a scattering solution: the incident reference state plus a purely outgoing scattered wave. (In three dimensions it becomes $e^{i\mathbf k\cdot\mathbf r}+f\,e^{ikr}/r$.) We will meet this form again.

### 2.4 What the stationary solution describes

$\phi_k$ is an eigenstate of $H$. Under time evolution it only acquires a phase,

$$
e^{-iHt/\hbar}\,\phi_k=e^{-iE_kt/\hbar}\,\phi_k ,
$$

so $|\phi_k(x,t)|^2$ does not depend on time. The incident, reflected, and transmitted waves are all present, everywhere, at all times.

Physically this is a **steady state**. Think of a continuous beam of particles shining on the barrier, like a laser beam on a partially reflecting mirror. Particles keep arriving from the left, and after the beam has been on for a long time nothing changes any more: an incident flux, a reflected flux, and a transmitted flux coexist. $\mathcal R$ and $\mathcal T$ are the fractions of the incident flux that are reflected and transmitted. Many scattering experiments are of exactly this kind, a beam on a target with count rates measured in the steady state, and for them the stationary problem is the question being asked.

In a typical textbook, the problem ends here.

---

## 3. A puzzle: where is the particle?

The steady-beam picture is self-consistent, but the words we used, "incident", "reflected", "transmitted", suggest a different one. 

Send the particles one at a time, like single photons onto a mirror. Each particle then has a *before* and an *after*: first it approaches from the left, then it hits the barrier, then it is found either on the right or back on the left. We say that it is transmitted with probability $\mathcal T$. This is a statement about a process in time, and the stationary state, which has no before and no after, does not contain it directly. How are the two pictures connected?

To answer this, we have to set up the single-particle experiment as what it really is, a time-dependent problem:

1. At some early time $t_i$, prepare a particle **far to the left** of the barrier, **moving to the right**.
2. Evolve it with the exact Hamiltonian $H$.
3. At some late time $t_f$, ask how much of it is on the right and how much is on the left.

**A plane wave cannot be such a particle.** The plane wave $\langle x|k\rangle=e^{ikx}/\sqrt{2\pi}$ has $|\langle x|k\rangle|^2=1/2\pi$ everywhere. It is not normalizable, and it has no position at all. It is not "far to the left" at any time, so step 1 cannot even be stated. A particle that is localized somewhere must be described by a superposition of plane waves, a **wave packet**.

The price is that a wave packet contains a spread of momenta, hence a spread of energies, so it is not an eigenstate of $H$. This is exactly what we want: the time dependence of the scattering process comes from this spread. After solving the time-dependent problem we will come back to the question of why the stationary calculation nonetheless gives the right answer.

---

## 4. A free wave packet

At the preparation time the particle is far from the origin, where $V=0$. For a while it therefore moves freely. Before switching on the barrier, we need to understand how a free wave packet moves.

### 4.1 How to specify the incoming packet

The most direct way to set up the problem is to write down the state $|\psi(t_i)\rangle$ that the source prepares at time $t_i$, far to the left and moving right, and evolve it. While it is far from the barrier it moves freely, so we may just as well carry it forward with $H_0$ to the convenient time $t=0$ and give it a name there:

$$
|g\rangle\equiv e^{iH_0t_i/\hbar}|\psi(t_i)\rangle ,
\qquad\text{equivalently}\qquad
|\psi(t_i)\rangle=e^{-iH_0t_i/\hbar}|g\rangle .
$$

The relation is one-to-one, so specifying $|g\rangle$ is the same as specifying the prepared state, and no generality is lost. In words: instead of saying what the packet looks like at the preparation time, we say what the freely moving packet would look like at the reference time $t=0$, and obtain the prepared state by running the free evolution backward from $0$ to $t_i$. This is the construction used in Scattering Theory 1, §2. Two points should be kept in mind.

- The family $|\psi_0(t)\rangle\equiv e^{-iH_0t/\hbar}|g\rangle$ is the motion the particle would have if there were no barrier. With the barrier present it describes the real particle only at early times. In particular $|g\rangle$, its value at $t=0$, is not the state of the real particle at $t=0$; §4.3 makes this concrete.
- The choice $t=0$ is a convention. Any other reference time would do equally well.

Why name the packet this way? Because in the end the question is not about one particular packet. Expand

$$
|g\rangle=\int dk\,g(k)\,|k\rangle .
$$

Time evolution is linear. Once we know what happens to each reference state $|k\rangle$, we know what happens to every packet: the coefficient $g(k)$ only says how much of each $|k\rangle$ the packet contains. The real content of the scattering problem is therefore **what happens to each reference asymptotic state of $H_0$**. The packet is the vehicle that gives "before" and "after" their meaning. Writing it as a superposition of reference states at a fixed reference time is what will make this reduction possible, as we will see once the barrier is switched on.

For now we take a concrete example and look at what free motion does to it. We take a real Gaussian in momentum,

$$
g(k)=(2\pi\sigma_k^2)^{-1/4}\exp\!\left[-\frac{(k-k_0)^2}{4\sigma_k^2}\right],\qquad k_0>0,\qquad \sigma_k\ll k_0 .
$$

It is normalized, $\int|g|^2dk=1$. The condition $\sigma_k\ll k_0$ means that essentially all momentum components are positive, i.e. the packet moves to the right.

### 4.2 The packet in position space

Inserting $1=\int dk\,|k\rangle\langle k|$ and using $e^{-iH_0t/\hbar}|k\rangle=e^{-iE_kt/\hbar}|k\rangle$,

$$
\psi_0(x,t)\equiv\langle x|e^{-iH_0t/\hbar}|g\rangle=\int\frac{dk}{\sqrt{2\pi}}\,g(k)\,e^{ikx-i\hbar k^2t/2m}.
$$

Each plane wave simply acquires its own phase $e^{-iE_kt/\hbar}$; all the time dependence is in these phases. With

$$
v_0=\frac{\hbar k_0}{m},\qquad \omega_0=\frac{\hbar k_0^2}{2m},\qquad
\sigma_x\equiv\frac{1}{2\sigma_k},\qquad t_R\equiv\frac{2m\sigma_x^2}{\hbar},\qquad
\sigma_x(t)\equiv\sigma_x\sqrt{1+\frac{t^2}{t_R^2}},
$$

the integral is Gaussian and gives

$$
\boxed{\;
\psi_0(x,t)=N(t)\,
\underbrace{\exp\!\left[-\frac{(x-v_0t)^2}{4\sigma_x(t)^2}\right]}_{\text{envelope}}\;
\underbrace{\exp\!\left\{i\left[k_0x-\omega_0t+\frac{t}{t_R}\,\frac{(x-v_0t)^2}{4\sigma_x(t)^2}\right]\right\}}_{\text{phase}}
\;}
$$

with $|N(t)|^2=1/\sqrt{2\pi}\,\sigma_x(t)$ and an $x$-independent phase of $N(t)$ that plays no role below.

> [!NOTE]- Derivation: the Gaussian integral
> **Sorting the exponent.** Write $k=k_0+q$. Then $kx=k_0x+qx$ and $\hbar k^2t/2m=\omega_0t+v_0qt+\hbar q^2t/2m$, so the full exponent, including the Gaussian $g$, is
> $$
> ikx-\frac{i\hbar k^2t}{2m}-\frac{q^2}{4\sigma_k^2}
> =i(k_0x-\omega_0t)+iq\,X-a(t)\,q^2,\qquad X\equiv x-v_0t,
> $$
> with
> $$
> a(t)\equiv\frac{1}{4\sigma_k^2}+\frac{i\hbar t}{2m}=\frac{1}{4\sigma_k^2}\left(1+\frac{it}{t_R}\right).
> $$
> (Check: $\frac{1}{4\sigma_k^2}\cdot\frac{1}{t_R}=\frac{\sigma_x^2\hbar}{2m\sigma_x^2}=\frac{\hbar}{2m}$.)
>
> **The integral.** For $\mathrm{Re}\,a>0$, $\int dq\,e^{-aq^2+iqX}=\sqrt{\pi/a}\;e^{-X^2/4a}$. Hence
> $$
> \psi_0(x,t)=N(t)\,e^{i(k_0x-\omega_0t)}\,e^{-X^2/4a(t)},\qquad
> N(t)=\frac{(2\pi\sigma_k^2)^{-1/4}}{\sqrt{2\pi}}\sqrt{\frac{\pi}{a(t)}} .
> $$
>
> **Real and imaginary parts of $1/4a$.** Multiplying numerator and denominator by $1-it/t_R$ and using $\sigma_k^2=1/4\sigma_x^2$,
> $$
> \frac{1}{4a(t)}=\frac{\sigma_k^2}{1+it/t_R}=\frac{\sigma_k^2\,(1-it/t_R)}{1+t^2/t_R^2}=\frac{1}{4\sigma_x(t)^2}\left(1-\frac{it}{t_R}\right).
> $$
> The real part gives the envelope, the imaginary part the extra phase in the boxed result.
>
> **The prefactor.** $|a(t)|=\frac{1}{4\sigma_k^2}\sqrt{1+t^2/t_R^2}$, so
> $$
> |N(t)|^2=\frac{(2\pi\sigma_k^2)^{-1/2}}{2\pi}\cdot\frac{\pi}{|a(t)|}=\frac{2\sigma_k}{\sqrt{2\pi}\,\sqrt{1+t^2/t_R^2}}=\frac{1}{\sqrt{2\pi}\,\sigma_x(t)} .
> $$

**The envelope.** Squaring,

$$
|\psi_0(x,t)|^2=\frac{1}{\sqrt{2\pi}\,\sigma_x(t)}\exp\!\left[-\frac{(x-v_0t)^2}{2\sigma_x(t)^2}\right],
$$

a normalized Gaussian of center $v_0t$ and width $\sigma_x(t)$.

**The phase.** The $x$-dependent phase tells us which wavenumber is found where. The local wavenumber is

$$
k_{\rm loc}(x,t)\equiv\partial_x(\text{phase})=k_0+\frac{t}{t_R}\,\frac{x-v_0t}{2\sigma_x(t)^2}.
$$

At $t=0$ it equals $k_0$ everywhere. For $t\neq0$ it varies linearly across the packet, with a slope of the same sign as $t$; such a wave is called *chirped*. For $|t|\gg t_R$, where $\sigma_x(t)\simeq\sigma_x|t|/t_R$, the local velocity becomes

$$
\frac{\hbar k_{\rm loc}}{m}\;\longrightarrow\;v_0+\frac{x-v_0t}{t}=\frac{x}{t}.
$$

### 4.3 What the free packet does

The result says two things.

**The center moves as $x=v_0t$.** At $t=0$ the packet is centered at the origin, exactly where the barrier is. At the preparation time $t_i<0$ it is at $x=v_0t_i<0$, to the left of the barrier, moving right. This is precisely the particle described in step 1 of §3.

**The width is smallest at $t=0$, and the phase says why.** At $t=0$, $\sigma_x\sigma_k=1/2$, the minimum allowed by the uncertainty principle, and the phase is flat: every part of the packet has the same wavenumber $k_0$. For $t>0$ the faster components are in front, and the packet spreads. For $t<0$ they are *behind* and catching up, so the packet is **converging**. At large $|t|$ the part of the packet at $x$ moves with velocity $x/t$, as if every component passed the origin at $t=0$. The packet prepared at $t_i$ is therefore wider than $|g\rangle$, and it would be sharpest at $x=0$, $t=0$ if nothing were in its way.

So $|g\rangle$ is a snapshot of the free motion at the moment it would pass the origin with its smallest width. It is **not** the state of the real particle at $t=0$. With the barrier present, the real particle at $t=0$ is in the middle of the collision, and nothing we have computed so far says what it looks like there. This is why Scattering Theory 1, §2 calls $|g\rangle$ a label rather than a state the source prepares at $t=0$.

### 4.4 $|g\rangle$ is a label

Two further observations show what kind of object $|g\rangle$ is.

**A real $g(k)$ is just one convenient choice.** Suppose instead that the source prepares the narrowest Gaussian at the preparation time, centered at $x=-L$. Its momentum amplitude at $t_i$ is $g(k)\,e^{ikL}$, and carrying it to $t=0$ gives the name

$$
\langle k|g'\rangle=g(k)\,e^{ikL}\,e^{iE_kt_i/\hbar}.
$$

The modulus $|g(k)|$, which says which momenta are present and with what weight, is unchanged. Only the phase differs, and the phase merely records where and when the free packet is narrowest. Our real Gaussian is the choice "narrowest at the origin at $t=0$", made because it gives the simplest formulas, not because it is special.

**The name does not depend on the preparation time.** For very early $t_i$ the center is at distance $v_0|t_i|$ from the origin, while the width grows as $\sigma_x|t_i|/t_R=(\hbar\sigma_k/m)|t_i|$, the velocity spread times the elapsed time. Their ratio is

$$
\frac{v_0|t_i|}{\sigma_x(t_i)}\;\xrightarrow{\;|t_i|\gg t_R\;}\;\frac{k_0}{\sigma_k}\gg1 .
$$

The packet runs away from the origin faster than it spreads, so by choosing $t_i$ early enough it is as far from the barrier, in units of its own width, as we like. Throughout, **$|g\rangle$ does not change**. Moving the preparation time earlier and earlier changes the prepared state $e^{-iH_0t_i/\hbar}|g\rangle$, which runs off to $x=-\infty$ and becomes infinitely wide, but it does not change $|g\rangle$.

So $|g\rangle$ is a **label** for the incoming state rather than a state the particle is ever in. It names the whole free motion $\{e^{-iH_0t/\hbar}|g\rangle\}_{t\in\mathbb R}$ that the real particle follows before the collision, and it stays fixed when the physical prepared state has no limit.

The next step is to switch on the barrier and follow this packet through the collision.

---

## 5. Switching on the barrier

We now solve the actual problem: the state that equals $e^{-iH_0t_i/\hbar}|g\rangle$ at a very early time $t_i$, evolved with the exact Hamiltonian $H$.

### 5.1 Guessing the solution

Evolving the packet with the exact $H$ sounds complicated. The packet is built from plane waves, which are not eigenstates of $H$, and during the collision it is reshaped in a way that is not at all simple (§5.5). The solution, however, is easy to guess.

Without the barrier the evolution is simple because each plane wave is an eigenstate of $H_0$ and only picks up its own phase:

$$
\psi_0(x,t)=\int dk\;g(k)\,e^{-iE_kt/\hbar}\,\langle x|k\rangle .
$$

With the barrier, the eigenstates are instead the $\phi_k$ of §2, and each of them contains the plane wave $\langle x|k\rangle$ as its incident part (§2.3):

$$
\phi_k(x)=\langle x|k\rangle+\frac{r(k)}{\sqrt{2\pi}}\,e^{ik|x|}.
$$

So we keep the same coefficients $g(k)$ and the same phases, and replace each plane wave by the eigenstate whose incident part it is:

$$
\boxed{\;\psi(x,t)=\int_0^\infty dk\;g(k)\,e^{-iE_kt/\hbar}\,\phi_k(x)\;}
$$

The integral runs over $k>0$, where $\phi_k$ is the left-incident solution of §2; $g$ is negligible at $k<0$ (§4.1).

Now here is the claim: **this is the solution we are looking for**. 

To prove it we need two things. First, it must solve the time-dependent Schrödinger equation, and it does, exactly, because each $\phi_k$ is an eigenstate of $H$. Second, it must be the state the source prepared, i.e. agree with $e^{-iH_0t_i/\hbar}|g\rangle$ at early times. A solution is fixed by its value at one time, so this second check is all that is left. Splitting each $\phi_k$ into its two parts, the guess is the free packet plus a scattered wave,

$$
\psi(x,t)=\psi_0(x,t)+\psi_{\rm sc}(x,t),\qquad
\psi_{\rm sc}(x,t)\equiv\int_0^\infty\frac{dk}{\sqrt{2\pi}}\,r(k)\,g(k)\,e^{ik|x|-iE_kt/\hbar},
$$

and what we have to show is that the scattered wave vanishes at early times.

> [!INFO]- Remark: why only the left-incident eigenstates?
> At each energy $H$ has a second eigenstate, the one incident from the right (§2.1). The guess does not use it. This needs no justification in advance: if the guess agrees with the prepared state, it *is* the solution, and the right-incident eigenstates simply do not take part.
>
> The [[Scattering Theory 0 Supplement - The General Solution with Both Incidence Directions|supplement]] starts instead from the general expansion over both families and derives which of them take part. The coefficient of the right-incident eigenstates turns out to be $g(k)$ at $k<0$, the part of the packet that comes in from the right, which is negligible for our packet.

### 5.2 Where the scattered wave comes from

Why should the scattered wave vanish at early times? The answer is clearest once we ask where it comes from. Subtracting the free equation $(i\hbar\partial_t-H_0)\psi_0=0$ from the exact one $(i\hbar\partial_t-H_0)\psi=V\psi$,

$$
(i\hbar\partial_t-H_0)\,\psi_{\rm sc}=V\psi .
$$

The scattered wave obeys the free Schrödinger equation with a **source** $V\psi$. The guess gives it in retarded form:

$$
\boxed{\;\psi_{\rm sc}(t)=-\frac{i}{\hbar}\int_{-\infty}^{t}dt'\;e^{-iH_0(t-t')/\hbar}\,V\psi(t')\;}
$$

Read it from right to left. At each earlier time $t'$ the potential acts on the wave that is there, $V\psi(t')$, and creates a little new wave, which then moves freely from $t'$ to $t$. The scattered wave at time $t$ is the sum of these contributions from all times before $t$. For the delta barrier $V\psi(t')=\lambda\,\psi(0,t')\,|x{=}0\rangle$: **the barrier is a point source at the origin, whose strength at each moment is the amplitude $\psi(0,t')$ of the wave hitting it.**

This also explains the $|x|$ in $\phi_k$. A point source at the origin driven at a fixed energy radiates $e^{ik|x|}$, a wave running away from it on both sides, and $r\,e^{ik|x|}$ is exactly this radiation. Superposing such steady emissions with the weights $g(k)$ gives a source that is on only while the packet passes. "Outgoing" in the stationary problem means "caused by the source" in time.

![[ST0_fig_barrier_as_source.svg|center|600]]

*The barrier as a source. The incident packet (red) reaches the origin around $t=0$. The barrier radiates to both sides (green) with strength proportional to $\psi(0,t')$, so only while the packet is on it. Before that nothing has reached the barrier and nothing has been radiated. Afterwards the radiation on the left is the reflected wave; on the right it adds to the incident packet, which continues past the barrier (grey dashed), to form the transmitted wave.*

> [!NOTE]- Derivation: the retarded form, from the guess
> **The Green function.** The radiation of a point source at the origin, driven at energy $E=\hbar^2k^2/2m$, solves $\big(E+\frac{\hbar^2}{2m}\partial_x^2\big)G=\delta(x)$. Since $\partial_x^2e^{ik|x|}=-k^2e^{ik|x|}+2ik\,\delta(x)$, the outgoing solution is
> $$
> G_0^{(+)}(x,0;E)=\langle x|\frac{1}{E-H_0+i0}|x{=}0\rangle=-\frac{im}{\hbar^2k}\,e^{ik|x|}.
> $$
> The other sign, $e^{-ik|x|}$, would be a wave converging onto the source; the $+i0$ of Scattering Theory 1, §4 selects the outgoing one.
>
> **The eigenstates are plane wave plus radiation.** With $\phi_k(0)=\tau/\sqrt{2\pi}$,
> $$
> \langle x|k\rangle+G_0^{(+)}(x,0;E_k)\,\lambda\,\phi_k(0)=\frac{1}{\sqrt{2\pi}}\Big[e^{ikx}-\frac{i\kappa}{k}\,\tau\,e^{ik|x|}\Big],
> $$
> and $-i\kappa\tau/k=-i\kappa/(k+i\kappa)=r$. So $\phi_k=|k\rangle+G_0^{(+)}(E_k)V\phi_k$, the Lippmann–Schwinger equation of Scattering Theory 1, §6. The scattered part of each eigenstate is the radiation of the barrier, driven by the eigenstate itself.
>
> **From energy to time.** For $\mathrm{Im}\,z>0$, $\int_0^\infty d\tau\,e^{iz\tau/\hbar}=i\hbar/z$, so
> $$
> \frac{1}{E-H_0+i0}=-\frac{i}{\hbar}\int_0^\infty d\tau\;e^{iE\tau/\hbar}\,e^{-iH_0\tau/\hbar}.
> $$
> **Superposing.** Insert this into $\psi_{\rm sc}(t)=\int dk\,g\,e^{-iE_kt/\hbar}\,G_0^{(+)}(E_k)V\phi_k$ and exchange the integrals:
> $$
> \psi_{\rm sc}(t)=-\frac{i}{\hbar}\int_0^\infty d\tau\;e^{-iH_0\tau/\hbar}\,V\!\int dk\,g(k)\,e^{-iE_k(t-\tau)/\hbar}\phi_k
> =-\frac{i}{\hbar}\int_0^\infty d\tau\;e^{-iH_0\tau/\hbar}\,V\psi(t-\tau).
> $$
> With $t'=t-\tau$ this is the boxed formula. The restriction $\tau>0$, i.e. $t'<t$, comes directly from the $+i0$. The retarded form is therefore not an extra assumption: it is the $e^{ik|x|}$ of the eigenstates, rewritten in time.

> [!INFO]- Remark: outgoing means causal, and the stationary-phase picture
> The same physics, in the two languages:
>
> | | stationary problem | time-dependent problem |
> |---|---|---|
> | condition on the scattered wave | outgoing only ($+i0$) | retarded: only sources at $t'<t$ contribute |
> | the source | driven continuously at one energy | driven by a pulse |
> | the scattered wave | always present (the steady beam of §2.4) | present only after the pulse |
>
> The emission time can also be read off directly from $\psi_{\rm sc}$. In
> $$
> \psi_{\rm sc}(x,t)=\int_0^\infty\frac{dk}{\sqrt{2\pi}}\,r(k)\,g(k)\,e^{i\Phi(k)},\qquad \Phi(k)=k|x|-\frac{\hbar k^2t}{2m},
> $$
> the integral is dominated by the $k$ at which the phase is stationary, $\Phi'(k)=0$, i.e. $|x|=\hbar kt/m$. The component of speed $v=\hbar k/m$ is found at distance $vt$ from the origin: it left the barrier at $t=0$, when the packet hit it. For $t<0$ there is no such point, since $|x|\ge0$: the radiation has not been emitted yet. Without the absolute value the stationary point would be $x=vt<0$, an ordinary free packet coming in from the left that has existed forever and was emitted by nothing.
>
> Including the phase of $r(k)$ in $\Phi$ shifts the stationary point to $|x|=vt-\frac{d\arg r}{dk}$: the emission is slightly late. This is the Wigner time delay, stored in the phase of $r(k)$; we do not pursue it here.
>
> One caveat: nonrelativistic free motion has no sharp light cone, since $e^{-iH_0\tau/\hbar}$ spreads a point instantly over all space. "Causal" here means that only sources at earlier times contribute, not that the radiation travels at a fixed speed.

> [!INFO]- Remark: beyond the delta barrier
> Nothing in the boxed formula is special to the delta function. For a general $V$, the source $V(x)\psi(x,t')$ is spread over the region where $V\neq0$, and it is negligible until the incident packet reaches that region. In three dimensions the radiation from a point $\mathbf r'$ is the outgoing spherical wave $e^{ik|\mathbf r-\mathbf r'|}/|\mathbf r-\mathbf r'|$, and far away the total scattered wave becomes $f\,e^{ikr}/r$. The delta barrier only makes the source a single point.
>
> Replacing the exact $\psi(t')$ in the source by the incident $\psi_0(t')$, i.e. letting the source be driven by the incident wave alone, gives the Born approximation.

### 5.3 Before the collision

The source strength is the exact wave at the origin. From the guess, with $\phi_k(0)=\tau(k)/\sqrt{2\pi}$,

$$
\psi(0,t')=\int_0^\infty\frac{dk}{\sqrt{2\pi}}\,\tau(k)\,g(k)\,e^{-iE_kt'/\hbar}\approx\tau(k_0)\,\psi_0(0,t'),
$$

since $\tau(k)$ hardly varies across the narrow packet. By §4.2, $|\psi_0(0,t')|^2\propto\exp\!\big[-v_0^2t'^2/2\sigma_x(t')^2\big]$. This is a **pulse** centered at $t'=0$, negligible once $|t'|\gg t_c$, where

$$
t_c\equiv\frac{\sigma_x}{v_0}
$$

is the time it takes the packet to pass a point. The barrier radiates only during this pulse.

For $t\ll-t_c$, the boxed formula of §5.2 involves only sources at $t'<t$, where the pulse is negligible. Nothing has reached the barrier yet, so nothing has been radiated, and $\psi_{\rm sc}(t)\to0$:

$$
\big\|\,\psi(t)-e^{-iH_0t/\hbar}|g\rangle\,\big\|\;\xrightarrow{\;t\to-\infty\;}\;0 .
$$

So at early times the guess is the free motion of $|g\rangle$, which is the prepared state. The guess is therefore **the state of the experiment**. Before the collision only $\psi_0$ is present, and it sits at $x<0$. Of the four waves of §2.1, only the incident wave on the left, the $A$ term, is there.

> [!NOTE]- Remark: how small is "negligible"?
> For $t_c\ll|t'|\ll t_R$ the packet has not yet spread, $\sigma_x(t')\simeq\sigma_x$, and the pulse falls off as $\exp(-t'^2/2t_c^2)$. At still earlier times the pulse is dominated by the components with $k\approx0$: they hardly move, so they sit near the barrier at all times. The pulse then decays only as $1/|t'|$, but with the tiny prefactor $|g(0)|^2\propto e^{-k_0^2/2\sigma_k^2}$. This is the price of using a Gaussian, which strictly speaking contains all momenta, including those too slow ever to arrive; for $\sigma_k\ll k_0$ it is utterly negligible.

> [!NOTE]- Derivation: the limit $t_i\to-\infty$, done carefully
> Let $\psi_{\rm exp}(t)$ be the true solution with $\psi_{\rm exp}(t_i)=e^{-iH_0t_i/\hbar}|g\rangle$. It and the guess $\psi(t)$ solve the same Schrödinger equation, and $e^{-iHt/\hbar}$ is unitary, so the distance between them does not depend on time. Evaluating it at $t_i$,
> $$
> \big\|\psi_{\rm exp}(t)-\psi(t)\big\|=\big\|\,e^{-iH_0t_i/\hbar}|g\rangle-\psi(t_i)\,\big\|\;\xrightarrow{\;t_i\to-\infty\;}\;0 .
> $$
> The last step is the result above. So the true state converges to the guess, at every $t$.

**The coefficient is the label.** The exact state is built from the eigenstates of $H$ with the **same** coefficient function $g(k)$ that builds the free packet out of plane waves. This is the reduction promised in §4.1: once we know the eigenstate $\phi_k$ that each reference state $|k\rangle$ turns into, we know the exact solution for every packet. It works because the incident part of $\phi_k$ is exactly the plane wave $e^{ikx}$, with coefficient $1$. The eigenstates are labelled by the free state they come from, and the packet is named by its free motion at the reference time, so the two names match.

### 5.4 After the collision

For $t\gg t_c$ the pulse is over, and everything the barrier radiated now moves freely. Pulling $e^{-iH_0t/\hbar}$ out of the boxed formula of §5.2 and letting its upper limit go to infinity,

$$
\psi_{\rm sc}(t)\;\simeq\;e^{-iH_0t/\hbar}|g_{\rm sc}\rangle,\qquad
|g_{\rm sc}\rangle\equiv-\frac{i}{\hbar}\int_{-\infty}^{\infty}dt'\;e^{iH_0t'/\hbar}\,V\psi(t') .
$$

The scattered wave is the free motion of a **fixed** ket, just like the incident packet. In momentum space,

$$
\langle k'|g_{\rm sc}\rangle=r(|k'|)\,g(|k'|)\qquad\text{for both signs of }k' .
$$

The time integral over the pulse produces $\delta(E_{k'}-E_k)$: the barrier radiates at the energy of the wave that drives it, so a component $k$ can only feed $k'=\pm k$. Adding the incident packet,

$$
\big\|\,\psi(t)-e^{-iH_0t/\hbar}|g_{\rm out}\rangle\,\big\|\;\xrightarrow{\;t\to+\infty\;}\;0,
\qquad
|g_{\rm out}\rangle=|g\rangle+|g_{\rm sc}\rangle=\int_0^\infty dk\;g(k)\Big[\tau(k)\,|k\rangle+r(k)\,|{-k}\rangle\Big].
$$

> [!NOTE]- Derivation: the momentum amplitude of the radiation
> **The limit.** The difference between $\psi_{\rm sc}(t)$ and $e^{-iH_0t/\hbar}|g_{\rm sc}\rangle$ is $\frac{i}{\hbar}e^{-iH_0t/\hbar}\int_t^\infty dt'\,e^{iH_0t'/\hbar}V\psi(t')$, which contains only sources after $t$. It vanishes as $t\to+\infty$ because the pulse is over.
>
> **The amplitude.** With $\langle k'|e^{iH_0t'/\hbar}V|\psi(t')\rangle=e^{iE_{k'}t'/\hbar}\,\lambda\,\psi(0,t')/\sqrt{2\pi}$ and the exact $\psi(0,t')$ of §5.3,
> $$
> \langle k'|g_{\rm sc}\rangle=-\frac{i\lambda}{2\pi\hbar}\int_0^\infty dk\,\tau(k)g(k)\int_{-\infty}^{\infty}dt'\,e^{i(E_{k'}-E_k)t'/\hbar}
> =-i\lambda\int_0^\infty dk\,\tau(k)g(k)\,\delta(E_{k'}-E_k),
> $$
> using $\int dt'\,e^{i\omega t'}=2\pi\delta(\omega)$. For $k>0$, $\delta(E_{k'}-E_k)=\frac{m}{\hbar^2|k'|}\delta(k-|k'|)$, so
> $$
> \langle k'|g_{\rm sc}\rangle=-\frac{i\kappa}{|k'|}\,\tau(|k'|)\,g(|k'|)=r(|k'|)\,g(|k'|).
> $$
> No approximation was made. The energy delta function appears here for the first time; it is the one in $S=1-2\pi i\,\delta(E_\beta-E_\alpha)T$ of Scattering Theory 1, §3.

Long after the collision the particle is **again free**, but in a different free state. On the right, the forward radiation adds to the incident packet that has continued past the barrier: $1+r=\tau$, so **the transmitted wave is the incident wave plus the forward-scattered wave**. On the left, the backward radiation is the reflected wave, with amplitude $r(k)g(k)$ at momentum $-k$. By §4.3 the two packets are centered near $\pm v_0t$, the transmitted one on the right and the reflected one on the left. These are the $C$ and $B$ terms of §2.1, and they are the only ones present. Together with §5.3, this is the time-dependent reading of the table in §2.1 promised there: incoming waves only before the collision, outgoing waves only after.

The norm is preserved, as it must be:

$$
\|g_{\rm out}\|^2=\int_0^\infty dk\,|g(k)|^2\big(|\tau|^2+|r|^2\big)=\|g\|^2=1 .
$$

Note that $|g_{\rm out}\rangle$ is a fixed ket, independent of $t$, just as $|g\rangle$ is. The incoming free motion has a name, and so does the outgoing one, and the collision changes the name by $|g_{\rm sc}\rangle$. We come back to this in §7.

### 5.5 During the collision

The figure shows the exact solution, computed directly from the guess of §5.1.

![[ST0_fig_exact_solution.png|center|720]]

*Exact $|\psi(x,t)|$ for $k_0=\kappa$, where $\mathcal T(k_0)=\mathcal R(k_0)=\tfrac12$, with $\sigma_x=4$ ($\hbar=m=1$). (a) Spacetime picture. The red dashed line is the center of the free motion $e^{-iH_0t/\hbar}|g\rangle$, i.e. what the particle would do without the barrier. (b) Snapshots of $|\psi(x,t)|^2$ (black) and of the free packet (red dashed). At $t=-40$ the two coincide. At $t=0$ the red curve is $|\langle x|g\rangle|^2$ itself, and the real particle looks nothing like it. At $t=+40$ the real particle is a transmitted plus a reflected packet, each carrying about half the probability.*

For $|t|\lesssim t_c$ the source is on ($t_c=4$ in the figure). The state is then neither the incoming packet nor a pair of outgoing ones: the barrier is still radiating, and what it has radiated so far is still near the origin. On the left, the incident and the reflected waves overlap and interfere, producing fringes with spacing $\pi/k_0$. On the right, the transmitted wave is building up.

This answers the question left open in §4.3: what the real particle looks like at $t=0$. It is in the middle of the collision, partly reflected and partly transmitted, and it is **not** $|g\rangle$. $|g\rangle$ describes the incoming free motion, which the real particle follows only before the collision.

> [!INFO]- Numerical check
> The figure was computed with $\hbar=m=1$, $k_0=\kappa=1$, $\sigma_k=1/8$ (so $\sigma_x=4$, $t_c=4$, $t_R=32$), by evaluating $\int dk\,g(k)\,e^{-iE_kt}\phi_k(x)$ on a grid.
>
> | quantity | value |
> |---|---|
> | $\big\|\psi(t)-e^{-iH_0t}\vert g\rangle\big\|$ at $t=-60$ | $9\times10^{-7}$ |
> | $\big\|\psi(t)-e^{-iH_0t}\vert g_{\rm out}\rangle\big\|$ at $t=+60$ | $2\times10^{-6}$ |
> | probability on $x>0$ at $t=+60$ | $0.496189$ |
> | $\int dk\,\vert\tau(k)\vert^2\vert g(k)\vert^2$ | $0.496189$ |
> | $\mathcal T(k_0)$ | $0.5$ |
>
> The last two lines differ, and the difference is not numerical. §6 explains it.

What remains is to read off the probabilities from $|g_{\rm out}\rangle$ and compare them with the stationary answer of §2. That is the subject of §6.


---

## 6. Probabilities, and why the stationary answer works

### 6.1 Reading off the probabilities

Long after the collision the state is $e^{-iH_0t/\hbar}|g_{\rm out}\rangle$, the sum of a transmitted packet with momentum amplitude $\tau(k)g(k)$ and a reflected packet with amplitude $r(k)g(k)$ at $-k$. The two packets are far apart, one at $x>0$ and one at $x<0$, so the probability of finding the particle on the right is the norm squared of the transmitted packet. Free motion does not change a norm, so it can be evaluated in momentum space at any time:

$$
P_{\rm T}=\int_0^\infty dk\;|\tau(k)|^2\,|g(k)|^2,\qquad
P_{\rm R}=\int_0^\infty dk\;|r(k)|^2\,|g(k)|^2,\qquad
P_{\rm T}+P_{\rm R}=1 .
$$

Neither the preparation time, nor the detection time, nor the phase of $g(k)$ appears. The apparatus enters only through the momentum distribution $|g(k)|^2$. The phase of $g$, which by §4.4 records where and when the packet is narrowest, does not matter for these probabilities.

> [!NOTE]- Derivation: probability on the right at late times
> Write $|g_{\rm out}\rangle=|g_{\rm T}\rangle+|g_{\rm R}\rangle$, with $\langle k|g_{\rm T}\rangle=\tau(k)g(k)$ for $k>0$ and $\langle k|g_{\rm R}\rangle=r(|k|)g(|k|)$ for $k<0$. By §4.3 the free motion of $|g_{\rm T}\rangle$ is centered near $+v_0t$ and that of $|g_{\rm R}\rangle$ near $-v_0t$. Their separation $2v_0t$ grows faster than their widths, by the factor $k_0/\sigma_k$ of §4.4, so for $t\gg t_c$ the first lies entirely at $x>0$ and the second entirely at $x<0$. Hence
> $$
> \int_0^\infty dx\,|\psi(x,t)|^2\;\longrightarrow\;\big\|e^{-iH_0t/\hbar}|g_{\rm T}\rangle\big\|^2=\big\|g_{\rm T}\big\|^2=\int_0^\infty dk\,|\tau(k)|^2|g(k)|^2 .
> $$
> The same argument on the left gives $P_{\rm R}$. Their sum is $\|g_{\rm out}\|^2=1$ (§5.4).

### 6.2 Each momentum component is transmitted with the stationary probability

Compare with §2.3. The integrand contains $|\tau(k)|^2=\mathcal T(k)$, the stationary transmission probability at wavenumber $k$:

$$
\boxed{\;P_{\rm T}=\int_0^\infty dk\;|g(k)|^2\,\mathcal T(k)\;}
$$

**The single-particle transmission probability is the stationary one, averaged over the momentum distribution of the packet.** Each momentum component is transmitted with its own stationary probability, independently of the others. They cannot mix because the barrier radiates only at the energy of the wave that drives it (§5.4): a component $k$ feeds only $\pm k$, and different $|k|$ never interfere in the final probabilities.

For a packet narrow in momentum, $\mathcal T(k)$ hardly varies over the width $\sigma_k$ and

$$
P_{\rm T}\;\simeq\;\mathcal T(k_0).
$$

This is why the stationary calculation of §2 gives the right answer for a single particle: it gives the right answer for every momentum component, and a narrow packet is essentially one component.

> [!NOTE]- Remark: the numerical value $0.496$
> The numerical check of §5.5 found $P_{\rm T}=0.496189$ instead of $\mathcal T(k_0)=0.5$. Expanding $\mathcal T(k)$ to second order around $k_0$ and using $\int|g|^2(k-k_0)^2dk=\sigma_k^2$,
> $$
> P_{\rm T}\;\simeq\;\mathcal T(k_0)+\tfrac12\,\mathcal T''(k_0)\,\sigma_k^2,\qquad
> \mathcal T''(k)=\frac{2\kappa^2\,(\kappa^2-3k^2)}{(k^2+\kappa^2)^3}.
> $$
> For $k_0=\kappa=1$, $\sigma_k=1/8$, this gives $0.5-\tfrac14\cdot\tfrac1{64}=0.49609$; the remaining $10^{-4}$ comes from higher orders. At $k_0=\kappa$ the curve $\mathcal T(k)$ is concave, so its average over the packet lies slightly below its value at the center. The difference is a property of the packet, not of the barrier, and it vanishes as $\sigma_k\to0$.
>
> The same averaging also reshapes the outgoing packets. The transmitted momentum distribution is $\mathcal T(k)|g(k)|^2$, and since $\mathcal T$ increases with $k$, the transmitted packet is slightly shifted toward higher momenta, the reflected one toward lower momenta. The barrier acts as a momentum filter.

### 6.3 The steady beam as a limit of packets

We can now answer the question of §3: how is the steady-beam picture of §2.4 related to a single particle that flies in and flies out?

Make the packet narrower and narrower in momentum. It becomes longer in position, $\sigma_x=1/2\sigma_k$, and takes longer to pass the barrier, $t_c=\sigma_x/v_0$. Near the barrier, at distances small compared with $\sigma_x$, all the $\phi_k$ in the superposition look alike, and

$$
\psi(x,t)\;\simeq\;A(t)\,\phi_{k_0}(x),\qquad A(t)=\int_0^\infty dk\;g(k)\,e^{-iE_kt/\hbar}=\sqrt{2\pi}\,\psi_0(0,t).
$$

**Near the barrier, a long packet is the stationary state $\phi_{k_0}$, switched on and off slowly** by the envelope $A(t)$, a pulse of duration $t_c$. While the packet passes, the barrier sees a steady beam. In the limit $\sigma_k\to0$ the pulse becomes infinitely long and the steady beam of §2.4 is recovered.

So the two pictures describe the same physics. The fraction $\mathcal T$ of the incident flux in a steady beam and the probability $\mathcal T$ that a single particle is transmitted are the same number, because a steady beam is a long stream of particles, each in a narrow packet. The division of labour is:

- **packets** give "before" and "after" their meaning, and are needed to say what the experiment is;
- **stationary states** carry the information about the barrier, $\tau(k)$ and $r(k)$, and are what one actually computes.

> [!NOTE]- Derivation: the long packet near the barrier
> In $\psi(x,t)=\int_0^\infty dk\,g\,e^{-iE_kt/\hbar}\phi_k(x)$, write $k=k_0+q$ with $|q|\lesssim\sigma_k$. The $k$ dependence of $\phi_k(x)$ comes from $\tau(k)$, $r(k)$, which vary on the scale $|k_0+i\kappa|\ge k_0\gg\sigma_k$, and from $e^{\pm ikx}=e^{\pm ik_0x}e^{\pm iqx}$. For $|x|\ll1/\sigma_k=2\sigma_x$, $e^{\pm iqx}\simeq1$, so $\phi_k(x)\simeq\phi_{k_0}(x)$ and it can be pulled out of the integral. What is left is $A(t)=\int dk\,g\,e^{-iE_kt/\hbar}=\sqrt{2\pi}\,\psi_0(0,t)$, the free packet at the origin, whose modulus is the pulse of §5.3. The source strength of §5.3, $\psi(0,t)\simeq\tau(k_0)\psi_0(0,t)$, is the special case $x=0$.

---

## 7. The interaction picture: following the label

We have now solved the problem completely, and it is worth stepping back to look at what we did. A comparison with classical scattering, familiar from mechanics, helps here. The classical problem is handled in much the same way as our quantum one, and the comparison makes the structure of the calculation, and of the interaction picture in particular, easy to see. The figure below is drawn for classical scattering in two dimensions. We go through it piece by piece and point out the counterpart of each element in the calculation above.

> [!figure]
> ![[Classical analog.svg|center|600]]
> Each observed ray is named by its free extension (dashed) into the interaction region near $t=0$: $|g\rangle$ for the incoming ray, $|h\rangle$ for the outgoing ray a detector accepts. The real trajectory (orange) bends inside the region. $S_{hg}=\langle h|S|g\rangle$ is the amplitude that the collision switches $g$ into $h$; in quantum mechanics $S|g\rangle$ is a superposition of many outgoing rays (grey fan).

In classical scattering, too, one does not ask what the particle does inside the interaction region. One asks only how it moves long before the collision, when it is far away and travels freely along the incoming ray, and how it moves long after, along an outgoing ray. A natural way to record these two free motions is to extend each ray freely into the interaction region, back or forward to the reference time $t=0$ (dashed lines). The end point then serves as a name for the whole ray. This is exactly what we did in §4: the blue dot is the incoming **label** $|g\rangle$, and the green dot is the label $|h\rangle$ of the outgoing ray that a detector accepts. The real particle, of course, does not follow the dashed lines. Inside the region it moves along the orange curve, and at $t=0$ it is at neither label, just as the real wave packet at $t=0$ looked nothing like $|g\rangle$ (§5.5).

A label specifies the whole free motion, not only its direction. In our problem $|g(k)|$ gives the speeds and directions, and the phase of $g(k)$ gives where and when (§4.4), much like an impact parameter in the classical case. This is why the green extension need not pass exactly through the blue dot; in our problem the small offset is the time delay stored in the phase of $r(k)$ (§5.2).

The quantum problem differs from the classical one in one respect. A classical particle leaves along a single outgoing ray, whereas a quantum particle leaves along several at once (grey fan); in our problem these are the transmitted and the reflected ray. A detector selects one of them, which is why the green ray is singled out.

With this picture in mind, the remaining steps are short. We first ask how a detector enters the description (§7.1), then what the interaction picture does (§7.2) and how the label changes in time (§7.3), and finally what is left in the limit of early preparation and late detection (§7.4).

### 7.1 The detector's question

Let us start at the end of the experiment. At the detection time $t_f$ a detector asks for the amplitude $\langle\varphi|\psi(t_f)\rangle$ of some accepted state $|\varphi\rangle$. It might seem natural to take a fixed $|\varphi\rangle$, but this does not work: the overlap tends to zero as $t_f\to\infty$, simply because the packet flies past it. What a detector really fixes is an outgoing ray, that is, its label $|h\rangle$. The accepted state is that ray at time $t_f$, $|\varphi\rangle=e^{-iH_0t_f/\hbar}|h\rangle$, the same construction as for the source in §4.1. With the prepared state $e^{-iH_0t_i/\hbar}|g\rangle$,

$$
\boxed{\;\mathcal A_{hg}(t_f,t_i)=\langle h|\,e^{iH_0t_f/\hbar}\,e^{-iH(t_f-t_i)/\hbar}\,e^{-iH_0t_i/\hbar}\,|g\rangle\;}
$$

This is the laboratory amplitude of Scattering Theory 1, §2. Read from right to left, it traces the figure: from the blue dot out along the dashed line to the source at $t_i$; along the real path to $t_f$; back along the green dashed line to the green dot. Without the barrier the free factors cancel and $\mathcal A_{hg}=\langle h|g\rangle$. By §5.4, $\mathcal A_{hg}\to\langle h|g_{\rm out}\rangle$ as $t_i\to-\infty$, $t_f\to+\infty$.

> [!NOTE]- Remark: the probabilities of §6 as detector questions
> *A detector that accepts the transmitted packet*, $|h\rangle=|g_{\rm T}\rangle/\|g_{\rm T}\|$ with $|g_{\rm T}\rangle$ the transmitted part of $|g_{\rm out}\rangle$ (§6.1): $|\mathcal A_{hg}|^2\to\|g_{\rm T}\|^2=P_{\rm T}$.
>
> *A counter on the right* accepts every right-moving ray. Summing $|\langle h|g_{\rm out}\rangle|^2$ over an orthonormal basis of labels with $k>0$ gives $\int_0^\infty dk\,|\langle k|g_{\rm out}\rangle|^2=P_{\rm T}$. At late times "on the right" and "moving right" are the same question, which is why a position counter can be described by $H_0$ labels at all.
>
> *Why a fixed state gives zero.* $\langle\varphi|\psi(t_f)\rangle\to\langle\varphi|e^{-iH_0t_f/\hbar}|g_{\rm out}\rangle$, the overlap of a fixed packet with a free packet that has flown off and spread without bound.

### 7.2 Following the label: the interaction picture

The same amplitude can be written in another way, by moving the free factor from the bra onto the state:

$$
\mathcal A_{hg}=\langle h|\psi_I(t_f)\rangle,\qquad
|\psi_I(t)\rangle\equiv e^{iH_0t/\hbar}|\psi(t)\rangle .
$$

If the barrier were switched off at time $t$, the particle would continue freely as $e^{-iH_0(t'-t)/\hbar}|\psi(t)\rangle=e^{-iH_0t'/\hbar}|\psi_I(t)\rangle$. So **$|\psi_I(t)\rangle$ is the label of the free motion the particle is on at time $t$**. In the figure: take the straight line tangent to the orange curve at time $t$ and extend it to $t=0$. Before the collision this always gives the blue dot, after it the outgoing labels:

$$
|\psi_I(t)\rangle\;\xrightarrow{\;t\to-\infty\;}\;|g\rangle,\qquad
|\psi_I(t)\rangle\;\xrightarrow{\;t\to+\infty\;}\;|g_{\rm out}\rangle .
$$

This, in the end, is all that distinguishes the two pictures. The **Schrödinger picture** follows the particle along its entire path, from the source to the detector, and the state never settles. The **interaction picture** removes the free motion, which we already know, by folding it back to the reference time. What remains is the change of label, and it happens only inside the red circle. In momentum space the two differ only by the phase in $\langle k|\psi(t)\rangle=e^{-iE_kt/\hbar}\langle k|\psi_I(t)\rangle$, which in the Schrödinger picture keeps rotating long after the collision is over.

One may call $e^{iH_0t/\hbar}$ a change to a frame that moves along with the free motion. Its content, however, is the one above: the state is described by the free motion it is currently on. This is the sense of the remark in Scattering Theory 1, §2 that the amplitude is "written after factoring out the known reference motion".

> [!INFO]- Remark: the classical version, in formulas
> A free trajectory $x(t)=x_0+pt/m$ is labelled by $(x_0,p)$. For a particle under a force $F$, the free line tangent to the trajectory at time $t$ has the label $x_I=x-pt/m$, $p_I=p$. Differentiating, $\dot p_I=F$ and $\dot x_I=-Ft/m$: the label moves only where the force acts. This is Lagrange's variation of constants, the idea behind osculating orbital elements in celestial mechanics. $|\psi_I(t)\rangle$ is its quantum version, and nothing in it is specific to scattering: for any $H=H_0+V$, the interaction-picture state is the label of the $H_0$ motion the system would follow if $V$ were switched off. What is special to scattering is that the label comes to rest at both ends.

### 7.3 The label changes only near $t=0$

Multiplying the retarded solution of §5.2 by $e^{iH_0t/\hbar}$, and using $e^{iH_0t/\hbar}\psi_0(t)=|g\rangle$,

$$
\boxed{\;|\psi_I(t)\rangle=|g\rangle-\frac{i}{\hbar}\int_{-\infty}^{t}dt'\;V_I(t')\,|\psi_I(t')\rangle,\qquad
V_I(t)\equiv e^{iH_0t/\hbar}\,V\,e^{-iH_0t/\hbar}\;}
$$

This is the equation for $U_I$ in Scattering Theory 1, §2, with $|\psi_I(t)\rangle=U_I(t,t_i)|g\rangle$ as $t_i\to-\infty$. Each term $V_I(t')|\psi_I(t')\rangle$ is the wave radiated by the barrier at time $t'$, folded back to the reference time. The label therefore changes only while the barrier radiates, and after the pulse it has collected all the radiation, $|g\rangle+|g_{\rm sc}\rangle=|g_{\rm out}\rangle$.

For the delta barrier $V_I(t)=\lambda\,\delta(\hat x+\hat pt/m)$, the barrier as seen along the free motion. On a label near the origin with momentum near $\hbar k_0$, $\hat x+\hat pt/m\approx v_0t$, so $V_I(t)|\psi_I\rangle$ is negligible unless $|t|\lesssim t_c$. This time window is the red circle of the figure.

> [!NOTE]- Derivation: $V_I(t)$ and the matrix-element form
> **The operator.** The free Heisenberg equation gives $e^{iH_0t/\hbar}\,\hat x\,e^{-iH_0t/\hbar}=\hat x+\hat pt/m$. A function of $\hat x$ transforms the same way, so $e^{iH_0t/\hbar}\delta(\hat x)e^{-iH_0t/\hbar}=\delta(\hat x+\hat pt/m)$.
>
> **The equation of motion.** With $\psi_I=e^{iH_0t/\hbar}\psi$ and $i\hbar\partial_t\psi=(H_0+V)\psi$,
> $$
> i\hbar\,\partial_t\psi_I=-H_0\psi_I+e^{iH_0t/\hbar}(H_0+V)\psi=e^{iH_0t/\hbar}Ve^{-iH_0t/\hbar}\,\psi_I=V_I\,\psi_I .
> $$
> Integrating from $t_i$, where $\psi_I(t_i)=|g\rangle$, gives the boxed equation with lower limit $t_i$.
>
> **In momentum space.** $\langle k'|V_I(t')|k\rangle=\frac{\lambda}{2\pi}\,e^{i(E_{k'}-E_k)t'/\hbar}$. Only *relative* phases appear, as in the equation for $A_{\beta\alpha}$ in Scattering Theory 1, §2. Integrated over all time they give $2\pi\hbar\,\delta(E_{k'}-E_k)$, the energy delta function of §5.4.
>
> **The Born approximation.** Replacing $|\psi_I(t')\rangle$ by $|g\rangle$ on the right-hand side, i.e. letting the barrier be driven by the incident wave alone, gives $\langle k'|g_{\rm sc}\rangle\approx-\frac{i\kappa}{|k'|}g(|k'|)$. Compared with the exact $r=-\frac{i\kappa}{k}\tau$, this sets $\tau\to1$ in the source.

### 7.4 The $S$ operator: a switchboard

Finally, let the preparation recede into the remote past and the detection into the remote future:

$$
S|g\rangle\equiv\lim_{\substack{t_f\to+\infty\\ t_i\to-\infty}}U_I(t_f,t_i)\,|g\rangle=|g_{\rm out}\rangle,
\qquad
\mathcal A_{hg}\;\longrightarrow\;\langle h|S|g\rangle .
$$

The limits are needed because only then are the incoming and outgoing rays truly free, and their extensions to $t=0$ well defined. Since $S|g\rangle=|g_{\rm out}\rangle$ for every $|g\rangle$, the packet can be stripped off:

$$
S|k\rangle=\tau(|k|)\,|k\rangle+r(|k|)\,|{-k}\rangle ,
$$

shown for $k>0$ and, by the mirror symmetry of the barrier, valid for $k<0$ as well. $S$ connects only states of the same energy (§5.4). It does not change the speed, only the direction, and attaches an amplitude and a phase to each switch. In one dimension there are only two directions, $\pm k$. In three dimensions there is a whole sphere of them, and the amplitude depends on the angle. $S$ is the switchboard in the red circle: a table saying, for each incoming direction, how much goes into each outgoing direction. The kernel $\langle k'|S|k\rangle=\tau\,\delta(k'-k)+r\,\delta(k'+k)$ is a distribution; numbers appear only after smearing with normalizable labels.

The labels $|g\rangle$ and $|h\rangle$ describe the apparatus, and $S$, **which contains neither**, describes the barrier. This is the separation promised in §4.1, and it is why Scattering Theory 1, §2 is written as it is. The reference packets at $t=0$ are labels of free motions, fixed while the physical states run away. The laboratory amplitude compares the exact state with the detector's free motion. The interaction picture is the bracketing that keeps the labels fixed, and in that bracketing the operator in the middle has a limit, $S$.

### 7.5 Why the folded switchboard has a limit

The last sentence of §7.4 deserves a closer look. Nothing stops us from building a switchboard directly in the Schrödinger picture. The operator

$$
U(t_f,t_i)=e^{-iH(t_f-t_i)/\hbar}
$$

takes whatever the source prepared at $t_i$ to whatever is there at $t_f$. For any finite times it is perfectly well defined and unitary, and for the delta barrier we have even computed what it does (§5.5). So why is *it* not the scattering operator? And why should $U_I(t_f,t_i)$, which contains $U$ as its middle factor, settle to a limit at all, let alone a unitary one? The figure of §7 answers both questions.

**The Schrödinger switchboard never settles.** Its input is the prepared packet, out on the incoming ray at $t_i$. Its output is the packet at $t_f$, out on the outgoing rays. As $t_i\to-\infty$ and $t_f\to+\infty$ both ends run off to infinity and spread without bound (§4.4). A table whose rows and columns are where the particle actually is cannot have a limit: between any two fixed normalizable states its entry tends to zero, simply because the packet is no longer there. This is the same reason a detector with a fixed accepted state sees nothing (§7.1).

In the momentum basis this takes a transparent form. Since $U=e^{-iH_0t_f/\hbar}\,U_I\,e^{iH_0t_i/\hbar}$ exactly, and $U_I\to S$,

$$
\langle k'|U(t_f,t_i)|k\rangle\;\simeq\;e^{-iE_{k'}t_f/\hbar}\,\langle k'|S|k\rangle\,e^{iE_kt_i/\hbar}
=\langle k'|S|k\rangle\;e^{-iE_k(t_f-t_i)/\hbar}.
$$

The last step uses that $S$ connects only $k'=\pm k$, so $E_{k'}=E_k$. **The Schrödinger table is the $S$ table times a clock.** The magnitudes are the same, but every entry carries the phase $e^{-iE_k(t_f-t_i)/\hbar}$, which keeps turning, faster at higher energy. By §4.4 a $k$-dependent phase records where and when the packet is, and this ever-growing phase is nothing but the packet running away along the rays. Averaged over a packet, the turning phases cancel out and the entries go to zero, as above. None of this comes from the barrier. Without it, $U=e^{-iH_0(t_f-t_i)/\hbar}$ is the identity table times the same clock, and it has no limit either. **What fails to converge is the free motion.**

**Folding brings both ends back into the red circle.** The two outer factors of $U_I$ remove exactly this clock. In the figure, $e^{-iH_0t_i/\hbar}$ carries the blue dot out along its dashed line to the source, and $e^{iH_0t_f/\hbar}$ carries the late packet back along the green dashed line to its dot. In the momentum basis they multiply each entry by $e^{iE_{k'}t_f/\hbar}e^{-iE_kt_i/\hbar}$, which on shell is exactly $e^{+iE_k(t_f-t_i)/\hbar}$. What is left is a table indexed by **labels**, and the labels sit in the red circle, near the origin at $t=0$, no matter how early the preparation and how late the detection:

- moving $t_i$ earlier does not move the blue dot (§4.4);
- moving $t_f$ later does not move the green dot, because once the particle has left the blue circle it moves freely, and a free motion has a fixed label (§7.2).

So the folded table can be read off entirely inside the red circle, and it has no way of knowing $t_i$ or $t_f$. That is why it has a limit.

**Why the label comes to rest.** The label changes only while the barrier acts on the particle (§7.3), that is, while the particle is inside the blue circle. For a particle aimed at the region, this is the time window around $t=0$ that the red circle stands for. The particle crosses the region in a finite time: its size divided by the speed, plus the passage time $t_c$ of the packet. Before it enters and after it leaves, $V_I(t)|\psi_I(t)\rangle$ is negligible, and $U_I(t_f,t_i)|g\rangle$ stops changing once $t_i$ lies before the entry and $t_f$ after the exit. Taking the limit only removes the last bit of the tails. For the delta barrier the blue circle shrinks to a point, and the crossing time is the pulse of §5.3.

**What the table may contain.** Three properties of $S$ can be read off from the same picture.

- *It is on shell: it switches directions, never speeds.* Outside the blue circle all the energy is kinetic. Energy is conserved, so the outgoing speed equals the incoming one. What the switch can do is pick the new direction and attach an amplitude and a phase to it. The $k$-dependence of that phase is the small offset between the green and blue dots, the time delay of §5.2. A second way to see it: delaying the whole experiment by a time $a$ slides both labels back along their rays by the same free motion, $|g\rangle\to e^{iH_0a/\hbar}|g\rangle$, and cannot change the switch in between. So $S$ commutes with $e^{iH_0a/\hbar}$, hence with $H_0$ (Scattering Theory 1, §3).
- *It is unitary.* $U_I$ is a product of three unitary operators, so it conserves probability at every finite time. Nothing is lost in the limit either, because everything that enters the blue circle eventually leaves it along some outgoing ray. For our barrier the table at one energy is a $2\times2$ matrix, and its unitarity contains slightly more than $\mathcal R+\mathcal T=1$ (see below).
- *It contains neither the apparatus nor the times* (§7.4).

This is the content of the remark in Scattering Theory 1, §2, that the interaction picture is "the laboratory amplitude written after factoring out the known reference motion". The known motion is the only thing that never settles. Once it is factored out at both ends, only the switch in the red circle is left.

> [!NOTE]- Derivation: the $2\times2$ switchboard is unitary
> At fixed energy, in the basis $\{|k\rangle,|{-k}\rangle\}$ with $k>0$, §7.4 gives $S|k\rangle=\tau|k\rangle+r|{-k}\rangle$ and, by mirror symmetry, $S|{-k}\rangle=r|k\rangle+\tau|{-k}\rangle$. With columns labelled by the incoming direction,
> $$
> S(k)=\begin{pmatrix}\tau&r\\ r&\tau\end{pmatrix},\qquad
> S^\dagger S=\begin{pmatrix}|\tau|^2+|r|^2&\tau^*r+r^*\tau\\ \tau r^*+r\tau^*&|\tau|^2+|r|^2\end{pmatrix}.
> $$
> The diagonal entries are $\mathcal T+\mathcal R=1$: each incoming ray is distributed completely over the outgoing ones. The off-diagonal entries say that the outgoing states from the two incoming directions are orthogonal. This needs $\mathrm{Re}(\tau r^*)=0$, and indeed
> $$
> \tau r^*=\frac{k}{k+i\kappa}\cdot\frac{i\kappa}{k-i\kappa}=\frac{ik\kappa}{k^2+\kappa^2}
> $$
> is purely imaginary. Probability conservation alone would not have told us this. It fixes the relative phase of $\tau$ and $r$: the transmitted and reflected amplitudes are $90^\circ$ out of phase.

> [!INFO]- Remark: the mathematical statements behind the picture
> These belong to the formal treatment in Scattering Theory 1, §7; here they are only stated, each next to the piece of the picture it expresses.
>
> *The Schrödinger table goes blank.* For states $|\varphi\rangle,|\chi\rangle$ in the absolutely continuous spectral subspace of $H$, $\langle\varphi|e^{-iHT/\hbar}|\chi\rangle\to0$ as $T\to\infty$ (Riemann–Lebesgue). The operator $e^{-iHT/\hbar}$ converges weakly to zero, and it has no strong limit.
>
> *The double limit splits into one limit per dot.* With $\Omega(t)\equiv e^{iHt/\hbar}e^{-iH_0t/\hbar}$,
> $$
> U_I(t_f,t_i)=\Omega(t_f)^\dagger\,\Omega(t_i),\qquad
> \langle h|U_I(t_f,t_i)|g\rangle=\big\langle\Omega(t_f)h\,\big|\,\Omega(t_i)g\big\rangle .
> $$
> $\Omega(t_i)|g\rangle$ is the exact state at $t=0$ that came in along the blue ray, and $\Omega(t_f)|h\rangle$ the exact state at $t=0$ that will go out along the green ray. Each end converges separately, to $\Omega^{(+)}|g\rangle$ and $\Omega^{(-)}|h\rangle$, which gives $S=\Omega^{(-)\dagger}\Omega^{(+)}$.
>
> *The label stops moving: Cook's criterion.* Differentiating, $\frac{d}{dt}\Omega(t)|g\rangle=\frac{i}{\hbar}e^{iHt/\hbar}\,V\,e^{-iH_0t/\hbar}|g\rangle$, so
> $$
> \big\|\Omega(t_2)g-\Omega(t_1)g\big\|\;\le\;\frac1\hbar\int_{t_1}^{t_2}dt\;\big\|V\,e^{-iH_0t/\hbar}g\big\| .
> $$
> If the free packet overlaps the potential only for an integrable amount of time, $\int^{\pm\infty}dt\,\|Ve^{-iH_0t/\hbar}g\|<\infty$, the right-hand side vanishes as $t_1,t_2\to\pm\infty$ and the limit exists. This is "the label does not change outside the blue circle", written as one inequality.
>
> *Unitarity needs one more fact.* A strong limit of unitary operators preserves norms, so $\Omega^{(\pm)}$ are isometries, but $S$ is unitary only if the two ranges coincide, $\operatorname{Ran}\Omega^{(+)}=\operatorname{Ran}\Omega^{(-)}$: every state that came in free goes out free, and every state that goes out free came in free (asymptotic completeness). This holds for short-range potentials. Bound states of $H$ are orthogonal to both ranges and play no part. If some outgoing rays are left out of the description, for example a channel that the collision opens, as photoassociation does by producing molecules that then decay, the table restricted to the remaining rays loses probability and is subunitary. The full $S$ is still unitary.
>
> *On shell.* The intertwining relation $e^{-iHa/\hbar}\Omega^{(\pm)}=\Omega^{(\pm)}e^{-iH_0a/\hbar}$, which follows from the definition by shifting $t$, gives $[S,e^{-iH_0a/\hbar}]=0$: the "delay the whole experiment" argument above.

> [!INFO]- Remark: how far can the blue circle reach?
> The argument needs the blue circle to be finite: outside it the particle must be free. If $V$ falls off slowly, the label never quite stops. The classical formulas of the remark in §7.2 measure how slowly it stops: $\dot p_I=F$ and $\dot x_I=-Ft/m$. Along the outgoing ray $r\simeq vt$, so for $V\propto1/r^n$ the force falls off as $F\propto t^{-(n+1)}$, and
> - the momentum label $p_I$, i.e. the direction, settles for every $n>0$;
> - the position label $x_I$, i.e. where and when, changes at the rate $t^{-n}$. This is integrable only for $n>1$.
>
> The quantum statement is the same: Cook's criterion holds for $|V|\lesssim r^{-n}$ with $n>1$.
>
> *Coulomb, $n=1$.* The direction settles, which is why the Rutherford cross section is well defined, but the where-and-when part of the label drifts as $\ln t$. The outgoing particle falls behind every free motion by an amount that grows without bound, and quantum mechanically this is the logarithmic Coulomb phase. The folded table has no limit, and $S$ has to be defined relative to modified, Coulomb-distorted reference motions.
>
> *Ultracold atoms and molecules.* The van der Waals interaction, $-C_6/r^6$, is short range by any standard, and so is the atom–ion interaction, $-C_4/r^4$. The longest-range interaction in these experiments is the dipole–dipole interaction of polar molecules or magnetic atoms, $\propto1/r^3$, with $n=3>1$. Its blue circle has soft edges, but the label comes to rest: the drift of $x_I$ after time $t$ falls off as $t^{-2}$. So the picture of a localized interaction region and a switchboard in the red circle holds for everything we will meet. The $1/r^3$ tail still leaves its mark on the table: it is anisotropic, couples partial waves, and makes all partial waves contribute at low energy. That changes how the table looks (Scattering Theory 5–6), not whether it exists.

---

## 8. Summary

The note followed one problem from the textbook answer to the interaction picture:

1. The stationary solution (§2) describes a steady beam, and its waves split into incoming and outgoing ones.
2. A single particle with a "before" and an "after" needs a wave packet (§3), and a packet is best named by its free motion at a reference time: the label $|g\rangle$ (§4).
3. The exact state is a superposition of stationary states with the same coefficients $g(k)$ (§5). Its scattered part is radiated by the barrier, which is why it is outgoing, and it turns the incoming label $|g\rangle$ into $|g_{\rm out}\rangle$.
4. Each momentum component is transmitted with its stationary probability, and a steady beam is the limit of long packets (§6).
5. The interaction picture follows the label, and its long-time limit is $S$ (§7).
6. The limit exists because folding the free motion back brings both ends of the path to labels near the origin at $t=0$, where only an on-shell, unitary switch of directions is left. The Schrödinger switchboard differs from it by a clock that never stops (§7.5).

[[Scattering Theory 1 - Asymptotic Dynamics and the Lippmann--Schwinger Equation|Scattering Theory 1]] states the same structure for a general $H=H_0+V$, where $H_0$ may include internal states and the label $k$ becomes a set of channel quantum numbers $\alpha$:

| Scattering Theory 1 | here |
|---|---|
| §2, laboratory amplitude and $U_I$ | §7.1–7.3 |
| §3, $S$ and the energy delta function | §5.4, §7.4, §7.5 |
| §§4–6, $G_0^{(\pm)}$, $T$, Lippmann–Schwinger, $\lvert\psi_\alpha^{(+)}\rangle$ | §5.2 (the $+i0$ is the retardation; $\phi_k=\lvert\psi_k^{(+)}\rangle$) |
| §7, Møller operators | §5.3: the exact state with incoming label $\lvert g\rangle$ is $\int dk\,g(k)\lvert\psi_k^{(+)}\rangle$; §7.5: why the limits exist |
