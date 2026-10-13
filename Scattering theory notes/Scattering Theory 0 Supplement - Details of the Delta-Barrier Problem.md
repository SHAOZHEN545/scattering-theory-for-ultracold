This note collects the details of the delta-barrier problem of [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering|Scattering Theory 0]]: derivations, checks, and remarks that are not needed to follow the main line of argument there. Each section supplements one part of the main note and can be read on its own.

| here | supplements |
|---|---|
| §S1, the stationary solution in detail | ST0 §2 |
| §S2, the free Gaussian packet | ST0 §4 |
| §S3, the time-dependent solution in detail | ST0 §5–6 |
| §S4, the general solution with both incidence directions | ST0 §5 |
| §S5, probabilities and the steady beam | ST0 §8 |
| §S6, the interaction picture in detail | ST0 §7.1–7.2 |
| §S7, why the folded switchboard has a limit: further details | ST0 §7.5 |

Notation and conventions are those of Scattering Theory 0. "ST0 §$n$" refers to the main note, "§S$n$" to this one.

---

## S1. The stationary solution

### S1.1 Incoming and outgoing waves

For $x\neq0$ the stationary equation is $\phi''+k^2\phi=0$, with solutions $e^{\pm ikx}$, $k>0$. The general solution is

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

The two matching conditions at the origin (§S1.2) fix the two outgoing amplitudes once the two incoming ones are given: **we choose what is sent in, and the barrier determines what comes out.** A source on the left sends in only from the left, $A=1$, $D=0$. Renaming $B\equiv r$ and $C\equiv\tau$ gives the $\phi_k$ of ST0 §2.

> [!INFO]- Why this boundary condition, and why nothing is lost by choosing it
> *Counting.* There are four coefficients and two matching conditions at the origin, so at each energy there are two independent solutions. The table gives a natural way to parametrize them: the incoming amplitudes $(A,D)$ are what is sent in, from the left or from the right, and the outgoing amplitudes $(B,C)$ are what the barrier sends back out. The two matching conditions are exactly enough to fix $(B,C)$ once $(A,D)$ are given.
>
> *Left incidence.* A source only on the left means that nothing arrives from $x=+\infty$, so $D=0$. Setting $A=1$ fixes the normalization of the incident wave, so that $r$ and $\tau$ are amplitudes relative to it.
>
> *Generality.* The opposite choice $A=0$, $D=1$ describes a source on the right, and every solution at this energy is a superposition of the two (§S4).
>
> *Incoming and outgoing in time.* The words "incoming" and "outgoing" are justified here by the direction of the current in a stationary state. In ST0 §6.3 the same classification appears directly in time: in a wave packet built from these terms, the $A$ and $D$ parts are present only before the collision, and the $B$ and $C$ parts only after it.

### S1.2 The matching conditions

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
> The argument below is more general: $\psi(x)=\langle x|\psi\rangle$ denotes a **general** wavefunction, not only the $\phi_k$, and $V(x)$ is a general potential.
>
> *Continuity of $\psi$ holds for every state of finite energy, whatever the potential.* The kinetic energy is $\frac{\hbar^2}{2m}\int|\psi'|^2dx$. If $\psi$ jumped at some point $x_0$, $\psi'$ would contain a term proportional to $\delta(x-x_0)$, and $\int|\psi'|^2dx$ would contain $\int\delta(x-x_0)^2dx=\delta(x_0-x_0)=\infty$. (For a non-normalizable state such as $\phi_k$, apply the same argument to the kinetic energy in a finite interval around $x_0$.)
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

### S1.3 Amplitudes and probabilities

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

> [!INFO]- Remarks: conservation, scales, and limits
> *Conservation.* $\mathcal R+\mathcal T=1$ is the equality of the currents on the two sides, $1-|r|^2=|\tau|^2$. (The currents themselves are $\hbar k/m$, $|r|^2\hbar k/m$, and $|\tau|^2\hbar k/m$, up to the common factor $1/2\pi$; §S1.1.)
>
> *The only scale.* $\mathcal T$ and $\mathcal R$ depend on $k/\kappa$ alone. In terms of energies, $\kappa^2/k^2=m\lambda^2/2\hbar^2E_k$: the barrier has a characteristic energy $m\lambda^2/2\hbar^2$, and only the ratio of $E_k$ to it matters.
>
> *Limits.* For $\kappa\to0$ there is no barrier and $\mathcal T\to1$. At low energy, $k\ll\kappa$, the barrier acts like a hard wall, $r\to-1$, and $\phi$ has a node at the origin. At high energy, $k\gg\kappa$, the barrier becomes transparent.
>
> *Barrier vs. well.* $\mathcal T$ and $\mathcal R$ contain $\lambda$ only through $\lambda^2$, so they are unchanged for a delta well, $\lambda\to-\lambda$. (The amplitudes $r,\tau$ do change, and the well also has a bound state, which is not part of the scattering problem.)

---

## S2. The free Gaussian packet

ST0 §4.1 described a free packet qualitatively. Here it is worked out for a Gaussian.

### S2.1 The packet in position space

Take a real Gaussian in momentum,

$$
g(k)=(2\pi\sigma_k^2)^{-1/4}\exp\!\left[-\frac{(k-k_0)^2}{4\sigma_k^2}\right],\qquad k_0>0,\qquad \sigma_k\ll k_0 .
$$

It is normalized, $\int|g|^2dk=1$, and $\sigma_k\ll k_0$ means that essentially all momentum components are positive. With

$$
v_0=\frac{\hbar k_0}{m},\qquad \omega_0=\frac{\hbar k_0^2}{2m},\qquad
\sigma_x\equiv\frac{1}{2\sigma_k},\qquad t_R\equiv\frac{2m\sigma_x^2}{\hbar},\qquad
\sigma_x(t)\equiv\sigma_x\sqrt{1+\frac{t^2}{t_R^2}},
$$

the integral $\psi_0(x,t)=\int\frac{dk}{\sqrt{2\pi}}\,g(k)\,e^{ikx-i\hbar k^2t/2m}$ is Gaussian and gives

$$
\boxed{\;
\psi_0(x,t)=N(t)\,
\underbrace{\exp\!\left[-\frac{(x-v_0t)^2}{4\sigma_x(t)^2}\right]}_{\text{envelope}}\;
\underbrace{\exp\!\left\{i\left[k_0x-\omega_0t+\frac{t}{t_R}\,\frac{(x-v_0t)^2}{4\sigma_x(t)^2}\right]\right\}}_{\text{phase}}
\;}
$$

with $|N(t)|^2=1/\sqrt{2\pi}\,\sigma_x(t)$ and an $x$-independent phase of $N(t)$ that plays no role.

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

### S2.2 What the free packet does

**The center moves as $x=v_0t$.** At $t=0$ the packet is centered at the origin, exactly where the barrier is. At the preparation time $t_i<0$ it is at $x=v_0t_i<0$, to the left of the barrier, moving right.

**The width is smallest at $t=0$, and the phase says why.** At $t=0$, $\sigma_x\sigma_k=1/2$, the minimum allowed by the uncertainty principle, and the phase is flat: every part of the packet has the same wavenumber $k_0$. For $t>0$ the faster components are in front, and the packet spreads. For $t<0$ they are *behind* and catching up, so the packet is **converging**. At large $|t|$ the part of the packet at $x$ moves with velocity $x/t$, as if every component passed the origin at $t=0$. The packet prepared at $t_i$ is therefore wider than $|g\rangle$, and it would be sharpest at $x=0$, $t=0$ if nothing were in its way.

So $|g\rangle$ is a snapshot of the free motion at the moment it would pass the origin with its smallest width. It is not the state of the real particle at $t=0$, which is in the middle of the collision (§S3.4).

### S2.3 The label

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

The packet runs away from the origin faster than it spreads, so by choosing $t_i$ early enough it is as far from the barrier, in units of its own width, as we like. Throughout, $|g\rangle$ does not change. Moving the preparation time earlier and earlier changes the prepared state $e^{-iH_0t_i/\hbar}|g\rangle$, which runs off to $x=-\infty$ and becomes infinitely wide, but it does not change $|g\rangle$.

---

## S3. The time-dependent solution

### S3.1 The retarded form, derived

ST0 §6.1 writes the scattered wave in retarded form,

$$
\psi_{\rm sc}(t)=-\frac{i}{\hbar}\int_{-\infty}^{t}dt'\;e^{-iH_0(t-t')/\hbar}\,V\psi(t'),
$$

and reads the barrier as a point source. Here we derive this form from the solution of ST0 §5, and add two remarks.

> [!NOTE]- Derivation: the retarded form, from the solution of ST0 §5
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
> and $-i\kappa\tau/k=-i\kappa/(k+i\kappa)=r$. So $\phi_k=|k\rangle+G_0^{(+)}(E_k)V\phi_k$, the Lippmann–Schwinger equation of Scattering Theory 1, §4. The scattered part of each eigenstate is the radiation of the barrier, driven by the eigenstate itself.
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
> With $t'=t-\tau$ this is the retarded form. The restriction $\tau>0$, i.e. $t'<t$, comes directly from the $+i0$. The retarded form is therefore not an extra assumption: it is the $e^{ik|x|}$ of the eigenstates, rewritten in time.

> [!INFO]- Remark: outgoing means causal, and the stationary-phase picture
> The same physics, in the two languages:
>
> | | stationary problem | time-dependent problem |
> |---|---|---|
> | condition on the scattered wave | outgoing only ($+i0$) | retarded: only sources at $t'<t$ contribute |
> | the source | driven continuously at one energy | driven by a pulse |
> | the scattered wave | always present (the steady beam of ST0 §2) | present only after the pulse |
>
> The emission time can also be read off directly from $\psi_{\rm sc}$. In
> $$
> \psi_{\rm sc}(x,t)=\int_0^\infty\frac{dk}{\sqrt{2\pi}}\,r(k)\,g(k)\,e^{i\Phi(k)},\qquad \Phi(k)=k|x|-\frac{\hbar k^2t}{2m},
> $$
> the integral is dominated by the $k$ at which the phase is stationary, $\Phi'(k)=0$, i.e. $|x|=\hbar kt/m$. The component of speed $v=\hbar k/m$ is found at distance $vt$ from the origin: it left the barrier at $t=0$, when the packet hit it. For $t<0$ there is no such point, since $|x|\ge0$: the radiation has not been emitted yet. Without the absolute value the stationary point would be $x=vt<0$, an ordinary free packet coming in from the left that has existed forever and was emitted by nothing. (This is the half-line argument of ST0 §6.3 in another form.)
>
> Including the phase of $r(k)$ in $\Phi$ shifts the stationary point to $|x|=vt-\frac{d\arg r}{dk}$: the emission is slightly late. This is the Wigner time delay, stored in the phase of $r(k)$, and it is the offset between the dots in the figure of ST0 §7.4.
>
> One caveat: nonrelativistic free motion has no sharp light cone, since $e^{-iH_0\tau/\hbar}$ spreads a point instantly over all space. "Causal" here means that only sources at earlier times contribute, not that the radiation travels at a fixed speed.

> [!INFO]- Remark: beyond the delta barrier
> Nothing in the retarded form is special to the delta function. For a general $V$, the source $V(x)\psi(x,t')$ is spread over the region where $V\neq0$, and it is negligible until the incident packet reaches that region. In three dimensions the radiation from a point $\mathbf r'$ is the outgoing spherical wave $e^{ik|\mathbf r-\mathbf r'|}/|\mathbf r-\mathbf r'|$, and far away the total scattered wave becomes $f\,e^{ikr}/r$. The delta barrier only makes the source a single point.
>
> Replacing the exact $\psi(t')$ in the source by the incident $\psi_0(t')$, i.e. letting the source be driven by the incident wave alone, gives the Born approximation.

### S3.2 Before the collision

ST0 §6.2 uses that the source is a pulse. Explicitly, with $\phi_k(0)=\tau(k)/\sqrt{2\pi}$,

$$
\psi(0,t')=\int_0^\infty\frac{dk}{\sqrt{2\pi}}\,\tau(k)\,g(k)\,e^{-iE_kt'/\hbar}\approx\tau(k_0)\,\psi_0(0,t'),
$$

since $\tau(k)$ hardly varies across the narrow packet, and by §S2.1 $|\psi_0(0,t')|^2\propto\exp\!\big[-v_0^2t'^2/2\sigma_x(t')^2\big]$: a pulse centered at $t'=0$, negligible once $|t'|\gg t_c=\sigma_x/v_0$.

> [!NOTE]- Remark: how small is "negligible"?
> For $t_c\ll|t'|\ll t_R$ the packet has not yet spread, $\sigma_x(t')\simeq\sigma_x$, and the pulse falls off as $\exp(-t'^2/2t_c^2)$. At still earlier times the pulse is dominated by the components with $k\approx0$: they hardly move, so they sit near the barrier at all times. The pulse then decays only as $1/|t'|$, but with the tiny prefactor $|g(0)|^2\propto e^{-k_0^2/2\sigma_k^2}$. This is the price of using a Gaussian, which strictly speaking contains all momenta, including those too slow ever to arrive; for $\sigma_k\ll k_0$ it is utterly negligible.

> [!NOTE]- Derivation: the limit $t_i\to-\infty$, done carefully
> Let $\psi_{\rm exp}(t)$ be the true solution with $\psi_{\rm exp}(t_i)=e^{-iH_0t_i/\hbar}|g\rangle$. It and the solution $\psi(t)$ of ST0 §5 solve the same Schrödinger equation, and $e^{-iHt/\hbar}$ is unitary, so the distance between them does not depend on time. Evaluating it at $t_i$,
> $$
> \big\|\psi_{\rm exp}(t)-\psi(t)\big\|=\big\|\,e^{-iH_0t_i/\hbar}|g\rangle-\psi(t_i)\,\big\|\;\xrightarrow{\;t_i\to-\infty\;}\;0 .
> $$
> The last step is the early-time limit of ST0 §6.2. So the true state converges to $\psi(t)$, at every $t$.

**The coefficient is the label.** The exact state is built from the eigenstates of $H$ with the **same** coefficient function $g(k)$ that builds the free packet out of plane waves. This is the payoff noted in ST0 §5: once we know the eigenstate $\phi_k$ that each reference state $|k\rangle$ turns into, we know the exact solution for every packet. It works because the incident part of $\phi_k$ is exactly the plane wave $e^{ikx}$, with coefficient $1$. The eigenstates are labelled by the free state they come from, and the packet is named by its free motion at the reference time, so the two names match.

### S3.3 After the collision

For $t\gg t_c$ the pulse is over, and everything the barrier radiated now moves freely. Pulling $e^{-iH_0t/\hbar}$ out of the retarded formula and letting its upper limit go to infinity,

$$
\psi_{\rm sc}(t)\;\simeq\;e^{-iH_0t/\hbar}|g_{\rm sc}\rangle,\qquad
|g_{\rm sc}\rangle\equiv-\frac{i}{\hbar}\int_{-\infty}^{\infty}dt'\;e^{iH_0t'/\hbar}\,V\psi(t') .
$$

The scattered wave is the free motion of a **fixed** ket, just like the incident packet. In momentum space,

$$
\langle k'|g_{\rm sc}\rangle=r(|k'|)\,g(|k'|)\qquad\text{for both signs of }k' ,
$$

so that $|g_{\rm out}\rangle=|g\rangle+|g_{\rm sc}\rangle$ reproduces ST0 §6.3. The time integral over the pulse produces $\delta(E_{k'}-E_k)$: the barrier radiates at the energy of the wave that drives it, so a component $k$ can only feed $k'=\pm k$.

> [!NOTE]- Derivation: the momentum amplitude of the radiation
> **The limit.** The difference between $\psi_{\rm sc}(t)$ and $e^{-iH_0t/\hbar}|g_{\rm sc}\rangle$ is $\frac{i}{\hbar}e^{-iH_0t/\hbar}\int_t^\infty dt'\,e^{iH_0t'/\hbar}V\psi(t')$, which contains only sources after $t$. It vanishes as $t\to+\infty$ because the pulse is over.
>
> **The amplitude.** With $\langle k'|e^{iH_0t'/\hbar}V|\psi(t')\rangle=e^{iE_{k'}t'/\hbar}\,\lambda\,\psi(0,t')/\sqrt{2\pi}$ and the exact $\psi(0,t')$ of §S3.2,
> $$
> \langle k'|g_{\rm sc}\rangle=-\frac{i\lambda}{2\pi\hbar}\int_0^\infty dk\,\tau(k)g(k)\int_{-\infty}^{\infty}dt'\,e^{i(E_{k'}-E_k)t'/\hbar}
> =-i\lambda\int_0^\infty dk\,\tau(k)g(k)\,\delta(E_{k'}-E_k),
> $$
> using $\int dt'\,e^{i\omega t'}=2\pi\delta(\omega)$. For $k>0$, $\delta(E_{k'}-E_k)=\frac{m}{\hbar^2|k'|}\delta(k-|k'|)$, so
> $$
> \langle k'|g_{\rm sc}\rangle=-\frac{i\kappa}{|k'|}\,\tau(|k'|)\,g(|k'|)=r(|k'|)\,g(|k'|).
> $$
> No approximation was made. This energy delta function is the one in $S=1-2\pi i\,\delta(E_\beta-E_\alpha)T$ of Scattering Theory 1, §3.

### S3.4 During the collision, and a numerical check

The figure shows the exact solution, computed directly from the formula of ST0 §5.

![[ST0_fig_exact_solution.png|center|720]]

*Exact $|\psi(x,t)|$ for $k_0=\kappa$, where $\mathcal T(k_0)=\mathcal R(k_0)=\tfrac12$, with $\sigma_x=4$ ($\hbar=m=1$). (a) Spacetime picture. The red dashed line is the center of the free motion $e^{-iH_0t/\hbar}|g\rangle$, i.e. what the particle would do without the barrier. (b) Snapshots of $|\psi(x,t)|^2$ (black) and of the free packet (red dashed). At $t=-40$ the two coincide. At $t=0$ the red curve is $|\langle x|g\rangle|^2$ itself, and the real particle looks nothing like it. At $t=+40$ the real particle is a transmitted plus a reflected packet, each carrying about half the probability.*

For $|t|\lesssim t_c$ the state is neither the incoming packet nor a pair of outgoing ones. On the left, the incident and reflected waves overlap and interfere, producing fringes with spacing $\pi/k_0$; on the right, the transmitted wave is building up. This is what the real particle looks like at $t=0$, and it is not $|g\rangle$.

The figure was computed with $\hbar=m=1$, $k_0=\kappa=1$, $\sigma_k=1/8$ (so $\sigma_x=4$, $t_c=4$, $t_R=32$), by evaluating $\int dk\,g(k)\,e^{-iE_kt}\phi_k(x)$ on a grid.

| quantity | value |
|---|---|
| $\big\|\psi(t)-e^{-iH_0t}\vert g\rangle\big\|$ at $t=-60$ | $9\times10^{-7}$ |
| $\big\|\psi(t)-e^{-iH_0t}\vert g_{\rm out}\rangle\big\|$ at $t=+60$ | $2\times10^{-6}$ |
| probability on $x>0$ at $t=+60$ | $0.496189$ |
| $\int dk\,\vert\tau(k)\vert^2\vert g(k)\vert^2$ | $0.496189$ |
| $\mathcal T(k_0)$ | $0.5$ |

The last two lines differ, and the difference is not numerical; §S5.2 explains it.

---

## S4. The general solution with both incidence directions

The solution of ST0 §5 was built only from the left-incident eigenstates, and then checked. Here we start instead from the most general solution, which contains the eigenstates incident from both sides, and derive which of them take part. The result is the same; the point is to see that nothing was lost.

### S4.1 Both families of eigenstates

At each energy $E_k$, $H$ has **two** independent eigenstates (§S1.1). ST0 used one of them, the solution with a source on the left. For a second one we take the solution with a source on the right ($A=0$, $D=1$). The barrier is symmetric, so this is simply the mirror image $\phi_k(-x)$.

It is convenient to label the mirror image by $-k$. For $k<0$, define $\phi_k(x)\equiv\phi_{|k|}(-x)$. Both families are then described by one formula,

$$
\phi_k(x)=\frac{1}{\sqrt{2\pi}}\Big[e^{ikx}+r(|k|)\,e^{i|k||x|}\Big],\qquad k\in\mathbb R,
$$

where $\tau$ and $r$ are the functions of ST0 §2, evaluated at $|k|>0$. For $k>0$ this is the wave incident from the left; for $k<0$ it is the wave incident from the right. The twofold degeneracy now sits in the sign of $k$, just as for $H_0$, where $|k\rangle$ and $|{-k}\rangle$ have the same energy. In both cases $\phi_k$ is the plane wave $\langle x|k\rangle$ plus a wave that only runs away from the origin.

> [!NOTE]- Check: the formula for $k<0$
> For $k<0$, $\phi_{|k|}(-x)=\frac{1}{\sqrt{2\pi}}\big[e^{-i|k|x}+r(|k|)\,e^{i|k||x|}\big]$, and $e^{-i|k|x}=e^{ikx}$. Region by region:
> $$
> \phi_k(x)=\frac{1}{\sqrt{2\pi}}
> \begin{cases}
> \tau(|k|)\,e^{ikx}, & x<0,\\[2pt]
> e^{ikx}+r(|k|)\,e^{-ikx}, & x>0,
> \end{cases}
> $$
> using $1+r=\tau$ on $x<0$. The incident wave $e^{ikx}$ on $x>0$ moves left, toward the barrier ($D=1$, $A=0$). The reflected wave $r\,e^{-ikx}=r\,e^{i|k|x}$ moves right, and the transmitted wave $\tau\,e^{ikx}$ on $x<0$ moves left. Both run away from the barrier.

Since $\lambda>0$ there is no bound state, so every solution of the time-dependent problem can be expanded as

$$
\psi(x,t)=\int_{-\infty}^{\infty}dk\;c(k)\,e^{-iE_kt/\hbar}\,\phi_k(x)
$$

for some coefficient function $c(k)$. Both families appear in this expansion. The part of $c$ at $k>0$ says how much of each left-incident eigenstate the solution contains, and the part at $k<0$ how much of each right-incident one. Whether the right-incident family actually takes part is **not** something to assume. It has to come out of the initial condition, and in §S4.3 it will.

> [!INFO]- Remark: the choice of basis, and what we will not need
> *Choice of basis.* Inside each two-dimensional eigenspace any two independent combinations would do, for example the even and odd combinations. The coefficient function would then be different but equally valid. We use left- and right-incident solutions because their coefficients turn out to be the simplest possible ones (§S4.3).
>
> *Bound states.* For a delta *well* the expansion would also need the bound state.
>
> *What we will not need.* The usual way to find $c(k)$ is to project the state at one time onto $\phi_k$, which requires the normalization integrals $\langle\phi_k|\phi_{k'}\rangle$. We will find $c(k)$ in a different way, from what the solution looks like in the remote past. That route is shorter, and it is closer to how the experiment is actually posed.

### S4.2 The solution as free packets on half lines

To see what $\psi(x,t)$ looks like before and after the collision, sort its terms in the same way as the table of §S1.1: on each side of the barrier, waves moving toward it and waves moving away. For any momentum amplitude $f(k)$, let $|f\rangle=\int dk\,f(k)|k\rangle$ be the corresponding free packet, and split it into its right-moving and left-moving parts,

$$
f_\rightarrow(k)\equiv f(k)\,\theta(k),\qquad f_\leftarrow(k)\equiv f(k)\,\theta(-k).
$$

Also define the **outgoing amplitude**

$$
c_{\rm out}(k)\equiv\tau(|k|)\,c(k)+r(|k|)\,c(-k).
$$

Then, **exactly**,

$$
\boxed{\;
\psi(x,t)=
\underbrace{\theta(-x)\,\langle x|e^{-iH_0t/\hbar}|c_\rightarrow\rangle
+\theta(x)\,\langle x|e^{-iH_0t/\hbar}|c_\leftarrow\rangle}_{\text{incoming}}
+\underbrace{\theta(x)\,\langle x|e^{-iH_0t/\hbar}|c_{{\rm out},\rightarrow}\rangle
+\theta(-x)\,\langle x|e^{-iH_0t/\hbar}|c_{{\rm out},\leftarrow}\rangle}_{\text{outgoing}}
\;}
$$

Each of the four terms is a free packet, evolved with $H_0$ and cut off to a half line. The **incoming** terms are kept on the side they come from: right-moving on the left, left-moving on the right. These are the $A$ and $D$ terms of §S1.1, combined over all $k$. The **outgoing** terms are kept on the side they go to: right-moving on the right, left-moving on the left. These are the $B$ and $C$ terms. (ST0 §6.3 used this decomposition for $c=0$ at $k<0$.)

The outgoing amplitude says where the outgoing waves come from. For $k>0$, $c_{\rm out}(k)=\tau\,c(k)+r\,c(-k)$: the right-moving wave on the right is the part of the left-incident wave that was transmitted, plus the part of the right-incident wave that was reflected.

> [!NOTE]- Derivation: the four-term decomposition
> Insert the region-by-region form of $\phi_k$ (ST0 §2 for $k>0$, the check in §S4.1 for $k<0$). For $x<0$,
> $$
> \sqrt{2\pi}\,\psi(x,t)=\int_{k>0}dk\,c(k)\,e^{-iE_kt/\hbar}\Big[e^{ikx}+r(k)\,e^{-ikx}\Big]
> +\int_{k<0}dk\,c(k)\,e^{-iE_kt/\hbar}\,\tau(|k|)\,e^{ikx}.
> $$
> The first term, $\int_{k>0}dk\,c(k)\,e^{ikx-iE_kt/\hbar}$, is $\sqrt{2\pi}\,\langle x|e^{-iH_0t/\hbar}|c_\rightarrow\rangle$. In the $r$ term substitute $k\to-k$. Since $E_{-k}=E_k$, it becomes $\int_{k<0}dk\,r(|k|)\,c(-k)\,e^{ikx-iE_kt/\hbar}$. Adding the $\tau$ term gives
> $$
> \int_{k<0}dk\,\Big[\tau(|k|)\,c(k)+r(|k|)\,c(-k)\Big]e^{ikx-iE_kt/\hbar}=\sqrt{2\pi}\,\langle x|e^{-iH_0t/\hbar}|c_{{\rm out},\leftarrow}\rangle .
> $$
> For $x>0$ the same steps, with the roles of $k>0$ and $k<0$ exchanged, give $\langle x|e^{-iH_0t/\hbar}|c_\leftarrow\rangle+\langle x|e^{-iH_0t/\hbar}|c_{{\rm out},\rightarrow}\rangle$. No approximation has been made.

So far nothing has been assumed about $c(k)$. To find it, we use the fact of ST0 §4.1: a free packet with only positive momenta is found entirely at $x<0$ as $t\to-\infty$ and entirely at $x>0$ as $t\to+\infty$, and a packet with only negative momenta does the opposite.

### S4.3 Long before the collision

Let $t\to-\infty$ in the four-term decomposition.

- $|c_\rightarrow\rangle$ has positive momenta, so its free packet is at $x<0$. The cutoff $\theta(-x)$ keeps all of it.
- $|c_\leftarrow\rangle$ has negative momenta, so its free packet is at $x>0$. The cutoff $\theta(x)$ keeps all of it.
- $|c_{{\rm out},\rightarrow}\rangle$ has positive momenta, so its free packet is at $x<0$. The cutoff $\theta(x)$ removes it.
- $|c_{{\rm out},\leftarrow}\rangle$ has negative momenta, so its free packet is at $x>0$. The cutoff $\theta(-x)$ removes it.

The two incoming terms add up to the full free packet of $c=c_\rightarrow+c_\leftarrow$, and the outgoing terms disappear:

$$
\big\|\,\psi(t)-e^{-iH_0t/\hbar}|c\rangle\,\big\|\;\xrightarrow{\;t\to-\infty\;}\;0,\qquad |c\rangle\equiv\int dk\,c(k)|k\rangle .
$$

**Every** exact solution looks, in the remote past, like a free packet, and that free packet has the same coefficient function $c(k)$ as the exact solution.

Now impose the initial condition. At the preparation time $t_i$ the state must be $e^{-iH_0t_i/\hbar}|g\rangle$. For very early $t_i$, the solution there is $e^{-iH_0t_i/\hbar}|c\rangle$, up to an error that vanishes as $t_i\to-\infty$. Free evolution is unitary, so the two can agree only if $|c\rangle=|g\rangle$, that is $c(k)=g(k)$ for **all** real $k$:

$$
\psi(x,t)=\int_{-\infty}^{\infty}dk\;g(k)\,e^{-iE_kt/\hbar}\,\phi_k(x).
$$

> [!NOTE]- Derivation: the limit $t_i\to-\infty$, and the normalization of the $\phi_k$
> Write $\psi_c(t)=\int dk\,c(k)\,e^{-iE_kt/\hbar}\phi_k$, and let $\psi_{\rm exp}(t)$ be the true solution with $\psi_{\rm exp}(t_i)=e^{-iH_0t_i/\hbar}|g\rangle$. Both solve the same Schrödinger equation, and $e^{-iHt/\hbar}$ is unitary, so the distance between them does not depend on time. Evaluating it at $t_i$,
> $$
> \big\|\psi_{\rm exp}(t)-\psi_g(t)\big\|=\big\|\,e^{-iH_0t_i/\hbar}|g\rangle-\psi_g(t_i)\,\big\|\;\xrightarrow{\;t_i\to-\infty\;}\;0 .
> $$
> The last step is the result above with $c=g$. So the true state converges to $\psi_g(t)$, at every $t$.
>
> A by-product: the norm of $\psi_c(t)$ is constant in time, and in the remote past it equals the norm of $e^{-iH_0t/\hbar}|c\rangle$. Hence $\|\psi_c\|=\|c\|$ for every $c$, and distinct coefficient functions give distinct solutions. This is the normalization of the $\phi_k$, obtained without computing $\langle\phi_k|\phi_{k'}\rangle$.

**Which eigenstates take part is decided by the packet.** The right-incident eigenstates enter with coefficient $g(k)$ at $k<0$. In §S1.1 "a source on the left" was imposed on each eigenstate by setting $D=0$. Here it is a property of the packet: a packet whose free motion comes in from the left has $g=0$ at $k<0$ and contains only left-incident eigenstates. This is the solution of ST0 §5. A source on each side would simply give $g$ weight at both signs of $k$, and both families would take part.

> [!INFO]- Remark: the tail of the Gaussian
> A real Gaussian $g(k)$ is not exactly zero for $k<0$; its weight there is of order $e^{-k_0^2/2\sigma_k^2}$. By ST0 §4.1, this tail is a small left-moving free packet that in the remote past was far to the **right**. So the prepared state $e^{-iH_0t_i/\hbar}|g\rangle$ contains a tiny piece arriving from the other side. The general solution handles it correctly: it enters through the right-incident eigenstates, with coefficient $g(k<0)$. The solution of ST0 §5, which integrates only over $k>0$, drops this piece. This is why ST0 §4.1 required that essentially all momenta be positive, $\sigma_k\ll k_0$.

### S4.4 Long after the collision

Let $t\to+\infty$. The roles are exchanged. The packet of $|g_\rightarrow\rangle$ has moved to $x>0$, where $\theta(-x)$ removes it. The packet of $|g_\leftarrow\rangle$ has moved to $x<0$, where $\theta(x)$ removes it. The two outgoing packets are now on the sides where they are kept. Hence

$$
\big\|\,\psi(t)-e^{-iH_0t/\hbar}|g_{\rm out}\rangle\,\big\|\;\xrightarrow{\;t\to+\infty\;}\;0,
\qquad
\langle k|g_{\rm out}\rangle=\tau(|k|)\,g(k)+r(|k|)\,g(-k).
$$

For a packet incident from the left ($g=0$ for $k<0$) this reduces to the result of ST0 §6.3. In general, the outgoing amplitude at momentum $k$ mixes the incoming amplitudes at $k$ and $-k$, the two free states with the same energy:

$$
\begin{pmatrix}\langle k|g_{\rm out}\rangle\\ \langle -k|g_{\rm out}\rangle\end{pmatrix}
=\begin{pmatrix}\tau & r\\ r & \tau\end{pmatrix}
\begin{pmatrix}g(k)\\ g(-k)\end{pmatrix},\qquad k>0,
$$

with $\tau=\tau(k)$, $r=r(k)$. This $2\times2$ matrix is the $S$ operator at one energy (§S7.1).

> [!INFO]- Numerical check
> With the parameters of §S3.4 and the grid extended to $k<0$, the four-term decomposition of §S4.2 and the direct evaluation of $\int dk\,g(k)\,e^{-iE_kt}\phi_k(x)$ agree to $10^{-15}$ at all times computed ($t=-60,-5,0,5,60$). The script is `make_fig_sec5.py`.

---

## S5. Probabilities and the steady beam

### S5.1 Reading off the probabilities

> [!NOTE]- Derivation: probability on the right at late times
> Write $|g_{\rm out}\rangle=|g_{\rm T}\rangle+|g_{\rm R}\rangle$, with $\langle k|g_{\rm T}\rangle=\tau(k)g(k)$ for $k>0$ and $\langle k|g_{\rm R}\rangle=r(|k|)g(|k|)$ for $k<0$. By ST0 §4.1 the free motion of $|g_{\rm T}\rangle$ is centered near $+v_0t$ and that of $|g_{\rm R}\rangle$ near $-v_0t$. Their separation $2v_0t$ grows faster than their widths, by the factor $k_0/\sigma_k$ of §S2.3, so for $t\gg t_c$ the first lies entirely at $x>0$ and the second entirely at $x<0$. Hence
> $$
> \int_0^\infty dx\,|\psi(x,t)|^2\;\longrightarrow\;\big\|e^{-iH_0t/\hbar}|g_{\rm T}\rangle\big\|^2=\big\|g_{\rm T}\big\|^2=\int_0^\infty dk\,|\tau(k)|^2|g(k)|^2 .
> $$
> The same argument on the left gives $P_{\rm R}$. Their sum is $\|g_{\rm out}\|^2=1$.

The phase of $g$, which by §S2.3 records where and when the packet is narrowest, does not appear in these probabilities.

### S5.2 The value 0.496

The numerical check of §S3.4 found $P_{\rm T}=0.496189$ instead of $\mathcal T(k_0)=0.5$. Expanding $\mathcal T(k)$ to second order around $k_0$ and using $\int|g|^2(k-k_0)^2dk=\sigma_k^2$,

$$
P_{\rm T}\;\simeq\;\mathcal T(k_0)+\tfrac12\,\mathcal T''(k_0)\,\sigma_k^2,\qquad
\mathcal T''(k)=\frac{2\kappa^2\,(\kappa^2-3k^2)}{(k^2+\kappa^2)^3}.
$$

For $k_0=\kappa=1$, $\sigma_k=1/8$, this gives $0.5-\tfrac14\cdot\tfrac1{64}=0.49609$; the remaining $10^{-4}$ comes from higher orders. At $k_0=\kappa$ the curve $\mathcal T(k)$ is concave, so its average over the packet lies slightly below its value at the center. The difference is a property of the packet, not of the barrier, and it vanishes as $\sigma_k\to0$.

The same averaging also reshapes the outgoing packets. The transmitted momentum distribution is $\mathcal T(k)|g(k)|^2$, and since $\mathcal T$ increases with $k$, the transmitted packet is slightly shifted toward higher momenta, the reflected one toward lower momenta. The barrier acts as a momentum filter.

### S5.3 The steady beam as a limit of packets

ST0 §8.2 uses that near the barrier a long packet is $\psi(x,t)\simeq A(t)\,\phi_{k_0}(x)$, with $A(t)=\sqrt{2\pi}\,\psi_0(0,t)$. Here is why.

> [!NOTE]- Derivation: the long packet near the barrier
> In $\psi(x,t)=\int_0^\infty dk\,g\,e^{-iE_kt/\hbar}\phi_k(x)$, write $k=k_0+q$ with $|q|\lesssim\sigma_k$. The $k$ dependence of $\phi_k(x)$ comes from $\tau(k)$, $r(k)$, which vary on the scale $|k_0+i\kappa|\ge k_0\gg\sigma_k$, and from $e^{\pm ikx}=e^{\pm ik_0x}e^{\pm iqx}$. For $|x|\ll1/\sigma_k=2\sigma_x$, $e^{\pm iqx}\simeq1$, so $\phi_k(x)\simeq\phi_{k_0}(x)$ and it can be pulled out of the integral. What is left is $A(t)=\int dk\,g\,e^{-iE_kt/\hbar}=\sqrt{2\pi}\,\psi_0(0,t)$, the free packet at the origin, whose modulus is the pulse of §S3.2. The source strength of §S3.2, $\psi(0,t)\simeq\tau(k_0)\psi_0(0,t)$, is the special case $x=0$.

---

## S6. The interaction picture

### S6.1 Detector questions

*A detector that accepts the transmitted packet*, $|h\rangle=|g_{\rm T}\rangle/\|g_{\rm T}\|$ with $|g_{\rm T}\rangle$ the transmitted part of $|g_{\rm out}\rangle$ (§S5.1): $|\mathcal A_{hg}|^2\to\|g_{\rm T}\|^2=P_{\rm T}$.

*A counter on the right* accepts every right-moving ray. Summing $|\langle h|g_{\rm out}\rangle|^2$ over an orthonormal basis of labels with $k>0$ gives $\int_0^\infty dk\,|\langle k|g_{\rm out}\rangle|^2=P_{\rm T}$. At late times "on the right" and "moving right" are the same question, which is why a position counter can be described by $H_0$ labels at all.

*Why a fixed accepted state gives zero.* $\langle\varphi|\psi(t_f)\rangle\to\langle\varphi|e^{-iH_0t_f/\hbar}|g_{\rm out}\rangle$, the overlap of a fixed packet with a free packet that has flown off and spread without bound.

### S6.2 The equation of motion

> [!NOTE]- Derivation: $V_I(t)$ and the equation for $|\psi_I\rangle$
> **The operator.** The free Heisenberg equation gives $e^{iH_0t/\hbar}\,\hat x\,e^{-iH_0t/\hbar}=\hat x+\hat pt/m$. A function of $\hat x$ transforms the same way, so $e^{iH_0t/\hbar}\delta(\hat x)e^{-iH_0t/\hbar}=\delta(\hat x+\hat pt/m)$.
>
> **The equation of motion.** With $\psi_I=e^{iH_0t/\hbar}\psi$ and $i\hbar\partial_t\psi=(H_0+V)\psi$,
> $$
> i\hbar\,\partial_t\psi_I=-H_0\psi_I+e^{iH_0t/\hbar}(H_0+V)\psi=e^{iH_0t/\hbar}Ve^{-iH_0t/\hbar}\,\psi_I=V_I\,\psi_I .
> $$
> Integrating from $t_i$, where $\psi_I(t_i)=|g\rangle$, gives the integral equation of ST0 §7.2, which ST0 obtains instead from the retarded form of §6.1.
>
> **In momentum space.** $\langle k'|V_I(t')|k\rangle=\frac{\lambda}{2\pi}\,e^{i(E_{k'}-E_k)t'/\hbar}$. Only *relative* phases appear, as in the equation for $A_{\beta\alpha}$ in Scattering Theory 1, §2. Integrated over all time they give $2\pi\hbar\,\delta(E_{k'}-E_k)$, the energy delta function of §S3.3.

**The Born approximation.** Replacing $|\psi_I(t')\rangle$ by $|g\rangle$ on the right-hand side, i.e. letting the barrier be driven by the incident wave alone, gives $\langle k'|g_{\rm sc}\rangle\approx-\frac{i\kappa}{|k'|}g(|k'|)$. Compared with the exact $r=-\frac{i\kappa}{k}\tau$, this sets $\tau\to1$ in the source.

### S6.3 The classical version

A free trajectory $x(t)=x_0+pt/m$ is labelled by $(x_0,p)$. For a particle under a force $F$, the free line tangent to the trajectory at time $t$ has the label $x_I=x-pt/m$, $p_I=p$. Differentiating, $\dot p_I=F$ and $\dot x_I=-Ft/m$: the label moves only where the force acts. This is Lagrange's variation of constants, the idea behind osculating orbital elements in celestial mechanics. $|\psi_I(t)\rangle$ is its quantum version, and nothing in it is specific to scattering: for any $H=H_0+V$, the interaction-picture state is the label of the $H_0$ motion the system would follow if $V$ were switched off. What is special to scattering is that the label comes to rest at both ends.

---

## S7. Why the folded switchboard has a limit: further details

ST0 §7.5 showed, with the figure of ST0 §7.4, that the Schrödinger switchboard differs from $S$ by a clock that never stops, and that the folded switchboard settles because its two ends are labels near the origin at $t=0$. Here we add why the label comes to rest, what the table may contain, the mathematical statements behind the picture, and how far the argument reaches.

### S7.1 Why the label comes to rest, and what the table may contain

**Why the label comes to rest.** The label changes only while the barrier acts on the particle (ST0 §7.2), that is, while the particle is inside the blue circle. For a particle aimed at the region, this is the time window around $t=0$ that the red circle stands for. The particle crosses the region in a finite time: its size divided by the speed, plus the passage time $t_c$ of the packet. Before it enters and after it leaves, $V_I(t)|\psi_I(t)\rangle$ is negligible, and $U_I(t_f,t_i)|g\rangle$ stops changing once $t_i$ lies before the entry and $t_f$ after the exit. For the delta barrier the blue circle shrinks to a point, and the crossing time is the pulse of §S3.2.

**What the table may contain.** Three properties of $S$ can be read off from the same picture.

- *It is on shell: it switches directions, never speeds.* Outside the blue circle all the energy is kinetic. Energy is conserved, so the outgoing speed equals the incoming one. What the switch can do is pick the new direction and attach an amplitude and a phase to it. The $k$-dependence of that phase is the small offset between the green and blue dots, the time delay of §S3.1. A second way to see it: delaying the whole experiment by a time $a$ slides both labels back along their rays by the same free motion, $|g\rangle\to e^{iH_0a/\hbar}|g\rangle$, and cannot change the switch in between. So $S$ commutes with $e^{iH_0a/\hbar}$, hence with $H_0$ (Scattering Theory 1, §3).
- *It is unitary.* $U_I$ is a product of three unitary operators, so it conserves probability at every finite time. Nothing is lost in the limit either, because everything that enters the blue circle eventually leaves it along some outgoing ray. For our barrier the table at one energy is a $2\times2$ matrix (§S4.4), and its unitarity contains slightly more than $\mathcal R+\mathcal T=1$ (see below).
- *It contains neither the apparatus nor the times* (ST0 §7.3).

> [!NOTE]- Derivation: the $2\times2$ switchboard is unitary
> At fixed energy, in the basis $\{|k\rangle,|{-k}\rangle\}$ with $k>0$, ST0 §7.3 gives $S|k\rangle=\tau|k\rangle+r|{-k}\rangle$ and, by mirror symmetry, $S|{-k}\rangle=r|k\rangle+\tau|{-k}\rangle$. With columns labelled by the incoming direction,
> $$
> S(k)=\begin{pmatrix}\tau&r\\ r&\tau\end{pmatrix},\qquad
> S^\dagger S=\begin{pmatrix}|\tau|^2+|r|^2&\tau^*r+r^*\tau\\ \tau r^*+r\tau^*&|\tau|^2+|r|^2\end{pmatrix}.
> $$
> The diagonal entries are $\mathcal T+\mathcal R=1$: each incoming ray is distributed completely over the outgoing ones. The off-diagonal entries say that the outgoing states from the two incoming directions are orthogonal. This needs $\mathrm{Re}(\tau r^*)=0$, and indeed
> $$
> \tau r^*=\frac{k}{k+i\kappa}\cdot\frac{i\kappa}{k-i\kappa}=\frac{ik\kappa}{k^2+\kappa^2}
> $$
> is purely imaginary. Probability conservation alone would not have told us this. It fixes the relative phase of $\tau$ and $r$: the transmitted and reflected amplitudes are $90^\circ$ out of phase.

### S7.2 The mathematical statements behind the picture

These belong to the formal treatment in Scattering Theory 1, §6, and are proved in the [[Scattering Theory 1 Supplement - Proofs and Derivations|Scattering Theory 1 Supplement]], §S3–S5; here they are only stated, each next to the piece of the picture it expresses.

*The Schrödinger table goes blank.* For states $|\varphi\rangle,|\chi\rangle$ in the absolutely continuous spectral subspace of $H$, $\langle\varphi|e^{-iHT/\hbar}|\chi\rangle\to0$ as $T\to\infty$ (Riemann–Lebesgue). The operator $e^{-iHT/\hbar}$ converges weakly to zero, and it has no strong limit.

*The double limit splits into one limit per dot.* With $\Omega(t)\equiv e^{iHt/\hbar}e^{-iH_0t/\hbar}$,

$$
U_I(t_f,t_i)=\Omega(t_f)^\dagger\,\Omega(t_i),\qquad
\langle h|U_I(t_f,t_i)|g\rangle=\big\langle\Omega(t_f)h\,\big|\,\Omega(t_i)g\big\rangle .
$$

$\Omega(t_i)|g\rangle$ is the exact state at $t=0$ that came in along the blue ray, and $\Omega(t_f)|h\rangle$ the exact state at $t=0$ that will go out along the green ray. Each end converges separately, to $\Omega^{(+)}|g\rangle$ and $\Omega^{(-)}|h\rangle$, which gives $S=\Omega^{(-)\dagger}\Omega^{(+)}$.

*The label stops moving: Cook's criterion.* Differentiating, $\frac{d}{dt}\Omega(t)|g\rangle=\frac{i}{\hbar}e^{iHt/\hbar}\,V\,e^{-iH_0t/\hbar}|g\rangle$, so

$$
\big\|\Omega(t_2)g-\Omega(t_1)g\big\|\;\le\;\frac1\hbar\int_{t_1}^{t_2}dt\;\big\|V\,e^{-iH_0t/\hbar}g\big\| .
$$

If the free packet overlaps the potential only for an integrable amount of time, $\int^{\pm\infty}dt\,\|Ve^{-iH_0t/\hbar}g\|<\infty$, the right-hand side vanishes as $t_1,t_2\to\pm\infty$ and the limit exists. This is "the label does not change outside the blue circle", written as one inequality.

*Unitarity needs one more fact.* A strong limit of unitary operators preserves norms, so $\Omega^{(\pm)}$ are isometries, but $S$ is unitary only if the two ranges coincide, $\operatorname{Ran}\Omega^{(+)}=\operatorname{Ran}\Omega^{(-)}$: every state that came in free goes out free, and every state that goes out free came in free (asymptotic completeness). This holds for short-range potentials. Bound states of $H$ are orthogonal to both ranges and play no part. If some outgoing rays are left out of the description, for example a channel that the collision opens, as photoassociation does by producing molecules that then decay, the table restricted to the remaining rays loses probability and is subunitary. The full $S$ is still unitary.

*On shell.* The intertwining relation $e^{-iHa/\hbar}\Omega^{(\pm)}=\Omega^{(\pm)}e^{-iH_0a/\hbar}$, which follows from the definition by shifting $t$, gives $[S,e^{-iH_0a/\hbar}]=0$: the "delay the whole experiment" argument of §S7.1.

### S7.3 How far can the blue circle reach?

The argument needs the blue circle to be finite: outside it the particle must be free. If $V$ falls off slowly, the label never quite stops. The classical formulas of §S6.3 measure how slowly it stops: $\dot p_I=F$ and $\dot x_I=-Ft/m$. Along the outgoing ray $r\simeq vt$, so for $V\propto1/r^n$ the force falls off as $F\propto t^{-(n+1)}$, and

- the momentum label $p_I$, i.e. the direction, settles for every $n>0$;
- the position label $x_I$, i.e. where and when, changes at the rate $t^{-n}$. This is integrable only for $n>1$.

The quantum statement is the same: Cook's criterion holds for $|V|\lesssim r^{-n}$ with $n>1$.

*Coulomb, $n=1$.* The direction settles, which is why the Rutherford cross section is well defined, but the where-and-when part of the label drifts as $\ln t$. The outgoing particle falls behind every free motion by an amount that grows without bound, and quantum mechanically this is the logarithmic Coulomb phase. The folded table has no limit, and $S$ has to be defined relative to modified, Coulomb-distorted reference motions.

*Ultracold atoms and molecules.* The van der Waals interaction, $-C_6/r^6$, is short range by any standard, and so is the atom–ion interaction, $-C_4/r^4$. The longest-range interaction in these experiments is the dipole–dipole interaction of polar molecules or magnetic atoms, $\propto1/r^3$, with $n=3>1$. Its blue circle has soft edges, but the label comes to rest: the drift of $x_I$ after time $t$ falls off as $t^{-2}$. So the picture of a localized interaction region and a switchboard in the red circle holds for everything we will meet. The $1/r^3$ tail still leaves its mark on the table: it is anisotropic, couples partial waves, and makes all partial waves contribute at low energy. That changes how the table looks (Scattering Theory 5–6), not whether it exists.
