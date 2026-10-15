This note collects the longer discussions and proofs behind [[Scattering Theory 1 - Asymptotic Dynamics and the Lippmann--Schwinger Equation|Scattering Theory 1]]. Short calculations are in collapsible boxes in the main text itself. What is here is organized by topic: each section picks up a point where ST1 states only the core idea and leaves the full story for later. §S1 is about the $+i0$ of the Lippmann–Schwinger equation, where it comes from and what it means. §S2 fills in the transition operator. §S3–S6 prove what ST1 §6 asserts about the asymptotic limits. Their pictorial version is [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#7.5 Why the folded switchboard has a limit|Scattering Theory 0, §7.5]], with the corresponding statements listed in [[Scattering Theory 0 Supplement - Details of the Delta-Barrier Problem#S7.2 The mathematical statements behind the picture|ST0 Supplement, §S7.2]].

| here | picks up from |
|---|---|
| §S1, the $+i0$: the remote past, damping, and causality | ST1 §4, §6.1 |
| §S2, the transition operator | ST1 §5 |
| §S3, existence of the asymptotic limits | ST1 §6.1, §6.2 |
| §S4, isometry, intertwining, and energy conservation | ST1 §6.3 |
| §S5, asymptotic completeness and the unitarity of $S$ | ST1 §6.3 |
| §S6, long-range potentials and ultracold interactions | ST1 §6.4 |

---

## S1. The $+i0$: the remote past, damping, and causality

In ST1 §4 the equation of motion of a state prepared in the remote past becomes the Lippmann–Schwinger equation, and on the way a time integral running into the remote past turns into the free resolvent $G_0^{(+)}(E)=(E-H_0+i0)^{-1}$. The main text computes that integral by inserting a damping by hand. This raises three questions, which we take in turn. Is the damping an extra assumption, and why must its sign be what it is (§S1.1, §S1.2)? What does the $+i0$ mean physically (§S1.3)? And what changes when the state is fixed in the remote future instead (§S1.4)? Throughout, continuum labels make the matrix elements distributions; every statement becomes an ordinary one after smearing with packets $g(\alpha)$ and $h(\beta)$, as in ST1 §2.

### S1.1 The integral into the past

The integral in question sits in the [[Scattering Theory 1 - Asymptotic Dynamics and the Lippmann--Schwinger Equation#^eq-eom-remote-past|time-dependent form]] of the equation of motion,

$$
-\frac{i}{\hbar}\int_{-\infty}^{t}dt'\,e^{i(E_\beta-E_\alpha)t'/\hbar}.
$$

As an ordinary integral it does not converge at its lower end, because the integrand only oscillates there. As a distribution in the energy difference it is well defined, and inserting $e^{\eta t'/\hbar}$ with $\eta\downarrow0$ is one way to compute it; the result is the energy denominator $e^{i(E_\beta-E_\alpha)t/\hbar}/(E_\alpha-E_\beta+i0)$ of the derivation box in ST1 §4. For $\eta<0$ the damped integral would diverge at $t'\to-\infty$. The sign is therefore fixed by the direction in which the integral runs, into the past, and not chosen. As $\eta\downarrow0$ at fixed $t$ the factor $e^{\eta t/\hbar}$ tends to one, so the damping leaves no trace at any finite time. All it does is give a meaning to the remote end.

The damping is often read as switching the interaction on slowly, $V\to e^{\eta t/\hbar}V$, from the remote past. That picture is harmless, but it suggests that the answer might depend on how the interaction is switched on, as if this were one more assumption about the experiment. It does not, and §S1.2 shows why: the damping is what the limit $t_i\to-\infty$ in the definition of $|\psi_\alpha^{(+)}\rangle$ produces on its own.

### S1.2 The damping is the limit itself

The damping in §S1.1 was inserted by hand. Here the Lippmann–Schwinger equation follows from the definition $|\psi_\alpha^{(+)}\rangle=\lim_{t_i\to-\infty}\Omega(t_i)|\alpha\rangle$, with $\Omega(t)=U_I(0,t)=e^{iHt/\hbar}e^{-iH_0t/\hbar}$, and the damping comes out of the limit.

If a function $f(t)$ has a limit as $t\to-\infty$, its weighted average

$$
\frac{\eta}{\hbar}\int_{-\infty}^{0}dt\,e^{\eta t/\hbar}f(t),
\qquad \eta>0,
$$

has the same limit as $\eta\downarrow0$ (Abel's theorem). The weight has unit integral, and as $\eta\downarrow0$ it spreads out to $|t|\sim\hbar/\eta\to\infty$, so every finite time interval drops out. The sign of $\eta$ is fixed because the average must reach into the remote past. Applied to $\Omega(t)|\alpha\rangle$, with $e^{-iH_0t/\hbar}|\alpha\rangle=e^{-iE_\alpha t/\hbar}|\alpha\rangle$, the time integral is elementary:

$$
\frac{\eta}{\hbar}\int_{-\infty}^{0}dt\,e^{i(H-E_\alpha-i\eta)t/\hbar}|\alpha\rangle
=
\frac{\eta}{i(H-E_\alpha-i\eta)}|\alpha\rangle
=
i\eta\,G(E_\alpha+i\eta)|\alpha\rangle ,
$$

with the full resolvent $G(z)=(z-H)^{-1}$. Hence

$$
|\psi_\alpha^{(+)}\rangle
=
\lim_{\eta\downarrow0}i\eta\,G(E_\alpha+i\eta)|\alpha\rangle .
$$

To turn this into the Lippmann–Schwinger equation we need the **second resolvent identity**. For $z$ off the real axis, write $G_0(z)=(z-H_0)^{-1}$. Since $(z-H_0)-(z-H)=V$,

$$
G(z)-G_0(z)
=
G_0(z)\big[(z-H_0)-(z-H)\big]G(z)
=
G_0(z)VG(z),
$$

and, factoring the other way, $G(z)-G_0(z)=G(z)VG_0(z)$. With the second form and $G_0(z)|\alpha\rangle=|\alpha\rangle/(z-E_\alpha)=|\alpha\rangle/i\eta$, we get $i\eta\,G(z)|\alpha\rangle=|\alpha\rangle+G(z)V|\alpha\rangle$, so that

$$
|\psi_\alpha^{(+)}\rangle
=
|\alpha\rangle+G^{(+)}(E_\alpha)V|\alpha\rangle .
$$

The first form rewrites the scattered part, $G^{(+)}V|\alpha\rangle=G_0^{(+)}V\big(|\alpha\rangle+G^{(+)}V|\alpha\rangle\big)=G_0^{(+)}V|\psi_\alpha^{(+)}\rangle$, and this is the Lippmann–Schwinger equation again.

### S1.3 What the $+i0$ means

For $\eta>0$ the elementary integral

$$
-\frac{i}{\hbar}
\int_0^{+\infty}d\tau\,
e^{i(E-E_\gamma)\tau/\hbar}
e^{-\eta\tau/\hbar}
=
\frac{1}{E-E_\gamma+i\eta}
$$

gives, in the spectral representation of $H_0$, the time representations of both boundary values:

$$
G_0^{(+)}(E)
=
-\frac{i}{\hbar}
\lim_{\eta\downarrow0}
\int_0^{+\infty}d\tau\,
e^{i(E-H_0)\tau/\hbar}
e^{-\eta\tau/\hbar},
\qquad
G_0^{(-)}(E)
=
\frac{i}{\hbar}
\lim_{\eta\downarrow0}
\int_0^{+\infty}d\tau\,
e^{-i(E-H_0)\tau/\hbar}
e^{-\eta\tau/\hbar}.
$$

$G_0^{(+)}$ is the Fourier transform of the retarded free propagator $\theta(\tau)e^{-iH_0\tau/\hbar}$, and $G_0^{(-)}$ that of the advanced one. In the time integral of §S1.1 the variable is $\tau=t-t'$, the time elapsed since an interaction, and the half line $\tau\geq0$ is the statement that the state at $t$ is built only from interactions at earlier times.

On the half line the only exponential damping that converges is $e^{-\eta\tau}$ with $\eta>0$. Any other regulator that respects the half line gives the same limit, for example $e^{-\epsilon\tau^2}$, or none at all once the expression is smeared with smooth packets in energy. As a distribution in $\omega$,

$$
\int_0^{+\infty}d\tau\,e^{i\omega\tau}
=
\frac{i}{\omega+i0}
=
\pi\delta(\omega)+i\operatorname{P}\frac1\omega .
$$

The two pieces have a reading in time. A reference state off the shell by $\Delta=E_\gamma-E$ dephases relative to the driving after $\tau\sim\hbar/|\Delta|$. It contributes only during this short interval, through the principal value: it is a virtual state, with the familiar energy denominator of perturbation theory. A state on the shell keeps its phase for arbitrarily long $\tau$, and its accumulated contribution is the delta function: it is a real state that can propagate for as long as it likes. The on-shell piece is the one that unitarity constrains.

The principal-value identity $1/(x\pm i0)=\operatorname{P}(1/x)\mp i\pi\delta(x)$ is therefore a consequence, not the primary meaning of the prescription. The primary meaning is the boundary condition: the two boundary values distinguish the scattering solution selected by remote-past preparation from the one selected by remote-future detection. Their coordinate-space form depends on the representation; for the delta barrier, $G_0^{(+)}$ gives the outgoing $e^{ik|x|}$ of [[Scattering Theory 0 Supplement - Details of the Delta-Barrier Problem#S3.1 The retarded form, derived|ST0 Supplement, §S3.1]]. The same half line in time appears three times in ST1: as the lower limit of the time integral in ST1 §4 (§S1.1), as the retarded propagator here, and as the ordered time differences of the Dyson series in §S2.3.

### S1.4 The remote future, and the sign $-i0$

The state that will leave on the free motion $\beta$ in the remote future is $|\psi_\beta^{(-)}\rangle=U_I(0,+\infty)|\beta\rangle$, as in ST1 §6.1. Everything goes through as in ST1 §4, with the direction of time reversed. The time-shift identity gives the same free phase. The equation of motion is now integrated from the final time, $U_I(t,t_f)=1+\frac{i}{\hbar}\int_t^{t_f}dt'\,V_I(t')U_I(t',t_f)$ with $t_f\to+\infty$, and the intermediate energy drops out as before. What is left is a time integral $\frac{i}{\hbar}\int_t^{+\infty}dt'\,e^{i(E_\gamma-E_\beta)t'/\hbar}$ for an outer label $\gamma$, which runs into the remote future. It needs the damping $e^{-\eta t'/\hbar}$, which acts at $t'\to+\infty$, and it gives

$$
\frac{i}{\hbar}\int_t^{+\infty}dt'\,e^{[i(E_\gamma-E_\beta)-\eta]t'/\hbar}
=
\frac{e^{[i(E_\gamma-E_\beta)-\eta]t/\hbar}}{E_\beta-E_\gamma-i\eta},
$$

so that

$$
|\psi_\beta^{(-)}\rangle
=
|\beta\rangle
+
G_0^{(-)}(E_\beta)V|\psi_\beta^{(-)}\rangle .
$$

The sign of $i0$ is the direction of the asymptotic time limit. The eigenvalue equation $H|\psi^{(\pm)}\rangle=E|\psi^{(\pm)}\rangle$ does not distinguish the two signs; they differ only in the boundary condition, and $G_0^{(-)}$ is the Fourier transform of the advanced propagator of §S1.3. The same limit argument as in §S1.2, with the weight $e^{-\eta t/\hbar}$ on $[0,+\infty)$, gives $|\psi_\beta^{(-)}\rangle=\lim_{\eta\downarrow0}(-i\eta)\,G(E_\beta-i\eta)|\beta\rangle$.

---

## S2. The transition operator

ST1 §5 reads $T$ off the state, derives the equation for $T$, and states its closed form and its relation to the Dyson series. This section supplies the details in the same order.

### S2.1 $T$ from the state, and the equation for $T$

Return to the [[Scattering Theory 1 - Asymptotic Dynamics and the Lippmann--Schwinger Equation#^eq-eom-remote-past|time-dependent form]] of ST1 §4, before the phase was cancelled, and let $t\to+\infty$. The left side tends to $S_{\beta\alpha}$. The bracket becomes an integral over the whole line, $\int_{-\infty}^{+\infty}dt'\,e^{i(E_\beta-E_\alpha)t'/\hbar}=2\pi\hbar\,\delta(E_\beta-E_\alpha)$. Therefore

$$
S_{\beta\alpha}
=
\delta(\beta-\alpha)
-
2\pi i\,\delta(E_\beta-E_\alpha)\langle\beta|V|\psi_\alpha^{(+)}\rangle ,
\qquad
T_{\beta\alpha}(E_\alpha)=\langle\beta|V|\psi_\alpha^{(+)}\rangle .
$$

The same limit can be taken on the left side written with the phase. With $\Delta=E_\beta-E_\alpha$, its scattered part contains $e^{i\Delta t/\hbar}/(-\Delta+i0)$. Since $e^{ixt}\operatorname{P}(1/x)\to i\pi\delta(x)$ as $t\to+\infty$, this tends to $-2\pi i\,\delta(\Delta)$, and the two forms agree. The steady state of ST1 §4 is not lost at late times. Its oscillating scattered part, smeared over energies, turns into the on-shell delta function of $S$.

Multiplying the Lippmann–Schwinger equation by $V$ gives

$$
V|\psi_\alpha^{(+)}\rangle
=
V|\alpha\rangle
+
VG_0^{(+)}(E_\alpha)\,V|\psi_\alpha^{(+)}\rangle ,
$$

an equation for the vector $X=V|\psi_\alpha^{(+)}\rangle$ alone. The operator $T(E)$ defined by $T(E)=V+VG_0^{(+)}(E)T(E)$ gives, applied to $|\alpha\rangle$ at $E=E_\alpha$, a vector $T(E_\alpha)|\alpha\rangle$ that satisfies the same equation $X=V|\alpha\rangle+VG_0^{(+)}(E_\alpha)X$. The two coincide whenever this equation has a unique solution. A second solution would leave a nonzero difference $Y$ with $Y=VG_0^{(+)}Y$. Then $\phi=G_0^{(+)}Y$ satisfies $\phi=G_0^{(+)}V\phi$: a solution of $H\phi=E_\alpha\phi$ with purely outgoing behaviour and no incoming part. For short-range potentials such a solution would be normalizable (Ikebe), a bound state embedded at positive energy, and Kato's theorem excludes those. So $T(E_\alpha)|\alpha\rangle=V|\psi_\alpha^{(+)}\rangle$.

The operator equation is needed off the shell. Its matrix-element form contains $T_{\gamma\alpha}(E)$ with $E_\gamma\neq E$, so $T(E)$ must be defined as an operator for every $E$, even though only $T_{\beta\alpha}(E_\alpha)$ with $E_\beta=E_\alpha$ enters $S$.

### S2.2 The closed form, and when the Born series fails

Let $T'(z)=V+VG(z)V$. With the first form of the second resolvent identity of §S1.2,

$$
V+VG_0(z)T'(z)
=
V+VG_0(z)V+VG_0(z)VG(z)V
=
V+V\big[G_0(z)+G_0(z)VG(z)\big]V
=
V+VG(z)V
=
T'(z),
$$

so $T'$ solves the equation for $T$, and taking $z=E+i\eta$ with $\eta\downarrow0$ gives $T(E)=V+VG^{(+)}(E)V$. Iterating $G=G_0+G_0VG$ inside the closed form gives back the Born series term by term.

The closed form says more than the series. $G(z)$ has poles at the bound-state energies of $H$, so $T(z)$ has them too. The Born series is a geometric series in the kernel $G_0V$, and it converges only where the spectral radius of $G_0^{(+)}(E)V$ is below one. A bound state $\chi_b$ at $E_b$ satisfies $G_0(E_b)V\chi_b=\chi_b$, an eigenvalue exactly one. For an attractive $V$ that binds, scaling it down to $\lambda V$ moves the bound state up to threshold at some $\lambda_c\le1$. Then $G_0(0)V$ has the eigenvalue $1/\lambda_c\ge1$, and the Born series diverges at and near threshold. The equation for $T$ and its closed form do not depend on this convergence.

### S2.3 Check: the Dyson series order by order

The Born series can also be obtained without the state, by expanding $U_I$ in powers of $V$ and taking the limits term by term. This route is longer, but it shows where each factor comes from.

At first order, $\langle\beta|V_I(t)|\alpha\rangle=e^{i(E_\beta-E_\alpha)t/\hbar}V_{\beta\alpha}$, and the integral over all $t$ gives $S^{(1)}_{\beta\alpha}=-2\pi i\,\delta(E_\beta-E_\alpha)V_{\beta\alpha}$, as in ST1 §3. At second order there are two ordered times $t_2<t_1$:

$$
S^{(2)}_{\beta\alpha}
=
\left(-\frac{i}{\hbar}\right)^2
\int_{-\infty}^{+\infty}dt_1
\int_{-\infty}^{t_1}dt_2
\int d\gamma\,
V_{\beta\gamma}V_{\gamma\alpha}
e^{i(E_\beta-E_\gamma)t_1/\hbar}
e^{i(E_\gamma-E_\alpha)t_2/\hbar}.
$$

Set $\tau=t_1-t_2$. At fixed $t_1$, $t_2$ running from $-\infty$ up to $t_1$ is $\tau$ running from $+\infty$ down to $0$, so $\int_{-\infty}^{t_1}dt_2=\int_0^{+\infty}d\tau$. The exponent becomes

$$
(E_\beta-E_\gamma)t_1+(E_\gamma-E_\alpha)(t_1-\tau)
=
(E_\beta-E_\alpha)t_1+(E_\alpha-E_\gamma)\tau .
$$

The intermediate energy has dropped out of the $t_1$ phase, and the ordered region has become a product, $t_1\in\mathbb R$ and $\tau\geq0$ independently:

$$
S^{(2)}_{\beta\alpha}
=
\int d\gamma\,
V_{\beta\gamma}V_{\gamma\alpha}
\left[
-\frac{i}{\hbar}
\int_{-\infty}^{+\infty}dt_1\,
e^{i(E_\beta-E_\alpha)t_1/\hbar}
\right]
\left[
-\frac{i}{\hbar}
\int_0^{+\infty}d\tau\,
e^{i(E_\alpha-E_\gamma)\tau/\hbar}
\right]
=
-2\pi i\,\delta(E_\beta-E_\alpha)
\int d\gamma\,
V_{\beta\gamma}
\frac{1}{E_\alpha-E_\gamma+i0}
V_{\gamma\alpha}.
$$

The first bracket is the universal factor of first order, and the second is the half-line integral of §S1.3.

At $n$th order there are $n$ ordered times $t_1>t_2>\cdots>t_n$ and $n-1$ intermediate labels. Write $\gamma_0=\beta$ and $\gamma_n=\alpha$. Each factor $\langle\gamma_{k-1}|V_I(t_k)|\gamma_k\rangle$ contributes $e^{i(E_{\gamma_{k-1}}-E_{\gamma_k})t_k/\hbar}V_{\gamma_{k-1}\gamma_k}$. Change variables to the latest time $t_1$ and the successive differences $\tau_j=t_j-t_{j+1}\geq0$, $j=1,\dots,n-1$, so that $t_k=t_1-\sum_{j<k}\tau_j$. The map is linear and triangular with unit diagonal, so its Jacobian is one, and the ordered region becomes the product $t_1\in\mathbb R$, $\tau_j\geq0$. In the exponent the $t_1$ terms telescope to $(E_\beta-E_\alpha)t_1$, and the coefficient of $-\tau_j$ collects the terms with $k>j$, which telescope as well:

$$
\sum_{k=j+1}^{n}(E_{\gamma_{k-1}}-E_{\gamma_k})=E_{\gamma_j}-E_\alpha .
$$

The exponent is therefore exactly $\frac{i}{\hbar}\big[(E_\beta-E_\alpha)t_1+\sum_{j}(E_\alpha-E_{\gamma_j})\tau_j\big]$, all $n$ integrals factorize, and

$$
S^{(n)}_{\beta\alpha}
=
-2\pi i\,\delta(E_\beta-E_\alpha)\,
\langle\beta|V\big(G_0^{(+)}(E_\alpha)V\big)^{n-1}|\alpha\rangle ,
$$

the $n$th term of the Born series. Every denominator is measured from the total energy $E_\alpha$, not from the energy of a neighbouring state. Each $\tau_j$ is how long the system stays in $\gamma_j$, and the phase accumulated in that time is set by the mismatch between $E_{\gamma_j}$ and the conserved energy. That the phases telescope, so that the overall time $t_1$ multiplies only $E_\beta-E_\alpha$, is the time-translation invariance of ST1 §3 seen order by order. The route is formal at two points: exchanging the time integrals with the $\gamma$ integrals needs smearing with packets, and summing over $n$ needs the Born series to converge, which §S2.2 shows can fail.

---

## S3. Existence of the asymptotic limits

ST1 §6.1 defines the Møller operators as strong limits and writes $S=\Omega^{(-)\dagger}\Omega^{(+)}$. Taken there formally, these limits hide three questions: whether the limits defining $\Omega^{(\pm)}$ exist, in what sense the double limit of $U_I(t_f,t_i)$ converges to $\Omega^{(-)\dagger}\Omega^{(+)}$, and whether the resulting $S$ is unitary. This section answers the first two; §S5 answers the third.

### S3.0 Preliminaries

First, a word on what kind of limit we mean. The strong limit means convergence on vectors, not uniform convergence of operators. For every normalizable asymptotic wave packet $|g\rangle$ in the scattering subspace,

$$
\left\|
e^{iHt/\hbar}e^{-iH_0t/\hbar}|g\rangle
-
\Omega^{(+)}|g\rangle
\right\|
\to0
\qquad
(t\to-\infty),
$$

and similarly for $\Omega^{(-)}$ as $t\to+\infty$. This is weaker than convergence in operator norm, but it is exactly the kind of convergence needed for physical wave packets.

We also need the spectral subspaces. Throughout, $\mathcal H$ is the Hilbert space and $P_A(B)$ is the spectral projector of a self-adjoint operator $A$ onto energies in a Borel set $B\subset\mathbb R$. Each vector $\chi$ has a spectral measure $\mu^A_\chi(B)=\langle\chi|P_A(B)|\chi\rangle$, and the Lebesgue decomposition of these measures splits the Hilbert space into three mutually orthogonal subspaces, each invariant under $A$,

$$
\mathcal H
=
\mathcal H_{\rm pp}(A)\oplus\mathcal H_{\rm ac}(A)\oplus\mathcal H_{\rm sc}(A).
$$

Vectors in $\mathcal H_{\rm pp}(A)$ have spectral measures made of point masses; $\mathcal H_{\rm pp}(H)$ is spanned by the bound states of $H$. Vectors in $\mathcal H_{\rm ac}(A)$ have spectral measures with a density in $E$. Vectors in $\mathcal H_{\rm sc}(A)$ have continuous spectral measures concentrated on sets of zero Lebesgue measure. The Møller operators are defined on $\mathcal H_{\rm ac}(H_0)$. For $H_0=\mathbf p^2/2m$, and more generally whenever $H_0$ contains the kinetic energy of free relative motion, this is all of $\mathcal H$.

### S3.1 The Schrödinger evolution has no asymptotic limit

**Proposition S3.1.** For every $\chi\in\mathcal H_{\rm ac}(H)$ and every $\varphi\in\mathcal H$,

$$
\lim_{T\to\pm\infty}\langle\varphi|e^{-iHT/\hbar}|\chi\rangle=0 .
$$

*Proof.* By the spectral theorem,
$$
\langle\varphi|e^{-iHT/\hbar}|\chi\rangle
=
\int e^{-iET/\hbar}\,d\mu_{\varphi\chi}(E),
\qquad
\mu_{\varphi\chi}(B)=\langle\varphi|P_H(B)|\chi\rangle .
$$
Since $P_H(B)$ is an orthogonal projector,
$$
|\mu_{\varphi\chi}(B)|
=
|\langle P_H(B)\varphi|P_H(B)\chi\rangle|
\le
\mu^H_\varphi(B)^{1/2}\,\mu^H_\chi(B)^{1/2}.
$$
The measure $\mu^H_\chi$ is absolutely continuous, so $\mu_{\varphi\chi}(B)=0$ whenever $B$ has Lebesgue measure zero. Hence $d\mu_{\varphi\chi}=\rho_{\varphi\chi}(E)\,dE$ with $\int|\rho_{\varphi\chi}|\,dE\le\|\varphi\|\|\chi\|$. The matrix element is the Fourier transform of an integrable function, and it vanishes at infinity by the Riemann–Lebesgue lemma. $\blacksquare$

Four consequences follow.

1. On $\mathcal H_{\rm ac}(H)$ the Schrödinger evolution converges weakly to zero, $\operatorname{w-}\lim_{T\to\pm\infty}e^{-iHT/\hbar}=0$.
2. It has no strong limit there. If $e^{-iHT/\hbar}\chi$ converged in norm to some $\xi$, then $\xi$ would also be the weak limit, so $\xi=0$, contradicting $\|e^{-iHT/\hbar}\chi\|=\|\chi\|\ne0$. In particular, $e^{-iH(t_f-t_i)/\hbar}$ has no limit as $t_f\to+\infty$, $t_i\to-\infty$.
3. On $\mathcal H_{\rm pp}(H)$ it has no limit of any kind: for a bound state $H\chi_b=E_b\chi_b$, $\langle\varphi|e^{-iHT/\hbar}|\chi_b\rangle=e^{-iE_bT/\hbar}\langle\varphi|\chi_b\rangle$ keeps rotating.
4. The same holds for $H_0$. For $H_0=\mathbf p^2/2m$ the density is explicit:
$$
\langle\varphi|e^{-iH_0T/\hbar}|\chi\rangle
=
\int d^3p\,\hat\varphi^*(\mathbf p)\hat\chi(\mathbf p)\,e^{-ip^2T/2m\hbar}
=
\int_0^\infty dE\,e^{-iET/\hbar}F(E),
$$
with $F(E)=mp\int d\Omega_{\mathbf p}\,\hat\varphi^*(\mathbf p)\hat\chi(\mathbf p)$ at $p=\sqrt{2mE}$, and $\int|F|\,dE\le\|\varphi\|\|\chi\|$. Thus $e^{-iH_0T/\hbar}\to0$ weakly on all of $\mathcal H$.

The weak limit is zero because the packet leaves every fixed region. The RAGE theorem (Ruelle, Amrein–Georgescu, Enss) makes this precise: for $\chi$ in the continuous subspace of $H$, the time-averaged probability of finding the system in any bounded region tends to zero, while for $\chi\in\mathcal H_{\rm pp}(H)$ it does not. The infinite-time limit of the Schrödinger table therefore exists only in the trivial sense that every entry between normalizable states tends to zero.

### S3.2 Exact factorization of the interaction-picture operator

Define, for finite $t$, the unitary operator

$$
\Omega(t)=e^{iHt/\hbar}e^{-iH_0t/\hbar}.
$$

Then, with no limit taken,

$$
\Omega(t_f)^\dagger\,\Omega(t_i)
=
e^{iH_0t_f/\hbar}e^{-iHt_f/\hbar}\,
e^{iHt_i/\hbar}e^{-iH_0t_i/\hbar}
=
U_I(t_f,t_i).
$$

The vector $\Omega(t_i)|g\rangle=e^{iHt_i/\hbar}\big(e^{-iH_0t_i/\hbar}|g\rangle\big)$ is the exact state at the reference time $0$ whose exact evolution passes through the freely transported packet at $t_i$. Likewise, $\Omega(t_f)|h\rangle$ is the exact state at time $0$ that will coincide with the detector's packet at $t_f$. The laboratory amplitude of ST1 §2 is therefore

$$
\mathcal A_{hg}(t_f,t_i)
=
\langle\Omega(t_f)h|\Omega(t_i)g\rangle .
$$

The two times have been separated: $t_i$ enters only the ket and $t_f$ only the bra. The double limit becomes two single limits, one at each end, and the definition of $\Omega^{(\pm)}$ is exactly the requirement that each of them exist.

**Proposition S3.2.** If $\Omega(t)g\to\Omega^{(+)}g$ as $t\to-\infty$ and $\Omega(t)h\to\Omega^{(-)}h$ as $t\to+\infty$, both in norm, then

$$
\lim_{t_f\to+\infty,\;t_i\to-\infty}
\langle h|U_I(t_f,t_i)|g\rangle
=
\langle\Omega^{(-)}h|\Omega^{(+)}g\rangle
=
\langle h|S|g\rangle ,
$$

jointly, without any ordering of the two limits.

*Proof.* For any vectors, $|\langle a'|b'\rangle-\langle a|b\rangle|\le\|a'-a\|\,\|b'\|+\|a\|\,\|b'-b\|$. Take $a'=\Omega(t_f)h$, $b'=\Omega(t_i)g$, $a=\Omega^{(-)}h$, $b=\Omega^{(+)}g$, and use $\|b'\|=\|g\|$. Both terms tend to zero. $\blacksquare$

This turns the formal limit of ST1 §6.1 into a theorem at the level of amplitudes between normalizable packets, which is all that ST1 §2 requires. The adjoint of a strongly convergent family converges in general only weakly, so convergence of $U_I(t_f,t_i)$ itself on vectors needs an additional property; it is settled in §S5.

### S3.3 Existence: Cook's criterion

**Proposition S3.3 (Cook).** Assume that $V$ is $H_0$-bounded with relative bound less than one, so that $D(H)=D(H_0)$ by the Kato–Rellich theorem; for bounded $V$ this is automatic. Suppose there is a dense set $\mathcal D\subset\mathcal H_{\rm ac}(H_0)\cap D(H_0)$ such that for every $g\in\mathcal D$

$$
\int_{-\infty}^{-T}dt\,\big\|V e^{-iH_0t/\hbar}g\big\|<\infty
\qquad\text{for some }T>0 .
$$

Then $\Omega^{(+)}=\operatorname{s-}\lim_{t\to-\infty}\Omega(t)$ exists on all of $\mathcal H_{\rm ac}(H_0)$. The same statement with $\int_T^{+\infty}$ gives $\Omega^{(-)}$.

*Proof.* **Step 1: the derivative.** For $g\in\mathcal D$, $e^{-iH_0t/\hbar}g\in D(H_0)=D(H)$, and
$$
\frac{d}{dt}\Omega(t)g
=
e^{iHt/\hbar}\,\frac{i}{\hbar}(H-H_0)\,e^{-iH_0t/\hbar}g
=
\frac{i}{\hbar}\,e^{iHt/\hbar}\,V\,e^{-iH_0t/\hbar}g .
$$

**Step 2: the Cauchy estimate.** Integrating,
$$
\Omega(t_2)g-\Omega(t_1)g
=
\frac{i}{\hbar}\int_{t_1}^{t_2}dt\,
e^{iHt/\hbar}\,V\,e^{-iH_0t/\hbar}g ,
$$
and since the unitary prefactor drops out of the norm,
$$
\big\|\Omega(t_2)g-\Omega(t_1)g\big\|
\le
\frac{1}{\hbar}\int_{t_1}^{t_2}dt\,\big\|V e^{-iH_0t/\hbar}g\big\| .
$$
As $t_1,t_2\to-\infty$ the right-hand side is the tail of a convergent integral and tends to zero. Thus $\Omega(t)g$ is Cauchy, and it converges because $\mathcal H$ is complete.

**Step 3: extension to the closure.** For $f\in\mathcal H_{\rm ac}(H_0)$ and $\varepsilon>0$ choose $g\in\mathcal D$ with $\|f-g\|<\varepsilon$. Since $\|\Omega(t)\|=1$,
$$
\big\|\Omega(t_2)f-\Omega(t_1)f\big\|
\le
2\varepsilon+\big\|\Omega(t_2)g-\Omega(t_1)g\big\| ,
$$
so $\Omega(t)f$ is Cauchy as well. $\blacksquare$

The integrand $\|Ve^{-iH_0t/\hbar}g\|$ measures how much the free packet named by the label $|g\rangle$ overlaps the potential at time $t$. By Step 1 this is the rate at which the exact state $\Omega(t)g$ that matches the label at time $t$ changes with $t$. Cook's criterion says that the label stops moving if the free packet spends only an integrable amount of time in contact with $V$. It requires no knowledge of the exact dynamics: only the free motion and the potential enter. The criterion is sufficient, not necessary.

### S3.4 Short-range potentials in three dimensions

Let $H_0=\mathbf p^2/2m$ on $L^2(\mathbb R^3)$ and write $\psi_t=e^{-iH_0t/\hbar}g$ for the freely transported packet, with $\hat g(\mathbf p)=\langle\mathbf p|g\rangle$. Three properties of free packets are needed. All of them follow from the free propagator

$$
\langle\mathbf r|e^{-iH_0t/\hbar}|\mathbf r'\rangle
=
\left(\frac{m}{2\pi i\hbar t}\right)^{3/2}
\exp\!\left[\frac{im|\mathbf r-\mathbf r'|^2}{2\hbar t}\right].
$$

**(a) Dispersive estimate.**

$$
\|\psi_t\|_\infty
\le
\left(\frac{m}{2\pi\hbar|t|}\right)^{3/2}\|g\|_1 .
$$

**(b) Asymptotic form.** As $|t|\to\infty$,

$$
\psi_t(\mathbf r)
=
\left(\frac{m}{it}\right)^{3/2}
e^{imr^2/2\hbar t}\,
\hat g\!\left(\frac{m\mathbf r}{t}\right)
+o(1)
\qquad\text{in }L^2(\mathbb R^3).
$$

At late times the probability density at $\mathbf r$ is $(m/|t|)^3|\hat g(m\mathbf r/t)|^2$: the packet there consists of the momentum $\mathbf p=m\mathbf r/t$, as for classical free flight from the origin. The momentum distribution of the label is laid out on spheres $r=pt/m$.

**(c) Propagation estimate.** If $\hat g\in C_c^\infty$ is supported in the shell $p_{\min}\le|\mathbf p|\le p_{\max}$ with $p_{\min}>0$, then for every $N$ there is a constant $C_N$ with

$$
|\psi_t(\mathbf r)|\le C_N\,(1+|t|)^{-N}
\qquad\text{for }r\le\frac{p_{\min}|t|}{2m}.
$$

The packet leaves the region around the origin at least as fast as its slowest component, up to tails that decay faster than any power.

**Derivation of (a)–(c).** The propagator $\langle\mathbf r|e^{-iH_0t/\hbar}|\mathbf r'\rangle=\int\frac{d^3p}{(2\pi\hbar)^3}\,e^{i\mathbf p\cdot(\mathbf r-\mathbf r')/\hbar}e^{-ip^2t/2m\hbar}$ factorizes into three Gaussian (Fresnel) integrals, each giving $\left(\frac{m}{2\pi i\hbar t}\right)^{1/2}e^{im(x-x')^2/2\hbar t}$.

**(a)** The modulus of the kernel is $(m/2\pi\hbar|t|)^{3/2}$ for all $\mathbf r,\mathbf r'$, so $|\psi_t(\mathbf r)|\le(m/2\pi\hbar|t|)^{3/2}\int d^3r'\,|g(\mathbf r')|$.

**(b)** Expand $|\mathbf r-\mathbf r'|^2=r^2-2\mathbf r\cdot\mathbf r'+r'^2$:
$$
\psi_t(\mathbf r)=\left(\frac{m}{2\pi i\hbar t}\right)^{3/2}e^{imr^2/2\hbar t}\int d^3r'\,e^{-i(m\mathbf r/t)\cdot\mathbf r'/\hbar}\,e^{imr'^2/2\hbar t}\,g(\mathbf r') .
$$
Without the factor $e^{imr'^2/2\hbar t}$ the integral is $(2\pi\hbar)^{3/2}\hat g(m\mathbf r/t)$, which gives the leading term. The map $g\mapsto(m/it)^{3/2}e^{imr^2/2\hbar t}\hat g(m\mathbf r/t)$ is unitary, since the substitution $\mathbf p=m\mathbf r/t$ gives $\int d^3r\,(m/|t|)^3|\hat g(m\mathbf r/t)|^2=\int d^3p\,|\hat g(\mathbf p)|^2$. The error is therefore the image of $(e^{imr'^2/2\hbar t}-1)g$ under a unitary map, and its norm tends to zero by dominated convergence.

**(c)** Write $\psi_t(\mathbf r)=(2\pi\hbar)^{-3/2}\int d^3p\,\hat g(\mathbf p)\,e^{i\Phi(\mathbf p)/\hbar}$ with $\Phi=\mathbf p\cdot\mathbf r-p^2t/2m$ and $\nabla_{\mathbf p}\Phi=\mathbf r-\mathbf pt/m$. For $r\le p_{\min}|t|/2m$ and $\mathbf p$ in the support of $\hat g$, $|\nabla_{\mathbf p}\Phi|\ge|\mathbf p||t|/m-r\ge p_{\min}|t|/2m$: the phase is nowhere stationary. The operator $L=-i\hbar\,|\nabla\Phi|^{-2}\,\nabla\Phi\cdot\nabla_{\mathbf p}$ satisfies $Le^{i\Phi/\hbar}=e^{i\Phi/\hbar}$. Integrating by parts $N$ times moves $(L^{\rm T})^N$ onto $\hat g$. Since $\partial_{p_i}\partial_{p_j}\Phi=-(t/m)\delta_{ij}$, each application of $L^{\rm T}$ costs a factor bounded by a constant times $1/|t|$, uniformly in $\mathbf r$ in this region. Hence $|\psi_t(\mathbf r)|\le C_N|t|^{-N}$.

**Proposition S3.4.** Let $V=V_1+V_2$ with $V_1\in L^2(\mathbb R^3)$ and $V_2$ bounded with

$$
|V_2(\mathbf r)|\le C\,(1+r)^{-n},\qquad n>1 .
$$

Then $\Omega^{(+)}$ and $\Omega^{(-)}$ exist on all of $L^2(\mathbb R^3)$.

*Proof.* A potential in $L^2+L^\infty$ is infinitesimally $H_0$-bounded in three dimensions, so Proposition S3.3 applies once its integral condition is checked. Take
$$
\mathcal D=\{g:\ \hat g\in C_c^\infty(\mathbb R^3\setminus\{0\})\}.
$$
This set is dense in $L^2(\mathbb R^3)$ and contained in $D(H_0)$, and each $g\in\mathcal D$ is a Schwartz function, so $\|g\|_1<\infty$. Fix $g\in\mathcal D$ with momentum support in $p_{\min}\le|\mathbf p|\le p_{\max}$ and take $|t|\ge1$.

Consider first the local part. By (a),
$$
\|V_1\psi_t\|
\le
\|V_1\|_2\,\|\psi_t\|_\infty
\le
\|V_1\|_2\left(\frac{m}{2\pi\hbar|t|}\right)^{3/2}\|g\|_1 ,
$$
which decays as $|t|^{-3/2}$.

For the tail, split space at $R_t=p_{\min}|t|/2m$. Inside, use (c); outside, use the decay of $V_2$:
$$
\|V_2\psi_t\|
\le
\|V_2\|_\infty
\left(\tfrac{4\pi}{3}R_t^3\right)^{1/2}C_N\,(1+|t|)^{-N}
+
C\,R_t^{-n}\,\|g\| .
$$
The first term decays faster than any power, and the second decays as $|t|^{-n}$. Both pieces are integrable at $t\to\pm\infty$ when $n>1$, and Proposition S3.3 gives the result. $\blacksquare$

The proof uses only where the free packet is at late times. By (b) it sits at distances $r\simeq p|t|/m$, so $\|V\psi_t\|$ is essentially $|V|$ evaluated at $p|t|/m$, and the threshold $n>1$ is the integrability of $|t|^{-n}$. This is the quantum version of the classical count in [[Scattering Theory 0 Supplement - Details of the Delta-Barrier Problem#S7.3 How far can the blue circle reach?|ST0 Supplement, §S7.3]], where the position part of the label drifts at the rate $t^{-n}$.

Two technical points deserve mention. First, excluding momenta near zero is what makes the packet leave at a finite minimum speed; slow components are recovered by density in Step 3 of Proposition S3.3, so this is not a physical restriction. Second, the dispersive estimate alone would give the result only for $V\in L^2$, which at infinity means $n>3/2$; the propagation estimate (c) is what reaches $n>1$. The $L^2$ piece $V_1$ accommodates local singularities milder than $r^{-3/2}$. Realistic interatomic potentials have a strongly repulsive core, roughly $r^{-12}$, which lies outside $L^2+L^\infty$. Such potentials require defining $H$ as a quadratic-form sum and a corresponding variant of Cook's argument, but the conclusion depends only on the tail, because at late times the free packet is far from the core.

---

## S4. Isometry, intertwining, and energy conservation

Start with the norm. For every $g\in\mathcal H_{\rm ac}(H_0)$,

$$
\|\Omega^{(\pm)}g\|=\lim\|\Omega(t)g\|=\|g\| .
$$

By polarization,

$$
\Omega^{(\pm)\dagger}\Omega^{(\pm)}=1
\qquad\text{on }\mathcal H_{\rm ac}(H_0).
$$

The range $\operatorname{Ran}\Omega^{(\pm)}$ is closed, being the isometric image of a complete space, and

$$
\Omega^{(\pm)}\Omega^{(\pm)\dagger}=P_\pm
$$

is the orthogonal projector onto it; $\Omega^{(\pm)\dagger}$ annihilates $(\operatorname{Ran}\Omega^{(\pm)})^\perp$. Thus $\Omega^{(\pm)}$ is a unitary map from $\mathcal H_{\rm ac}(H_0)$ onto its range, but not in general onto $\mathcal H$: $P_\pm\ne1$ when $H$ has bound states (§S5). This is why the unitarity of $S=\Omega^{(-)\dagger}\Omega^{(+)}$ is not automatic.

Next, how do the Møller operators behave under a time shift? For every real $a$,

$$
e^{-iHa/\hbar}\,\Omega(t)
=
e^{iH(t-a)/\hbar}e^{-iH_0(t-a)/\hbar}\,e^{-iH_0a/\hbar}
=
\Omega(t-a)\,e^{-iH_0a/\hbar}.
$$

As $t\to\mp\infty$, so does $t-a$, and taking strong limits on both sides gives

$$
e^{-iHa/\hbar}\,\Omega^{(\pm)}
=
\Omega^{(\pm)}\,e^{-iH_0a/\hbar}.
$$

Differentiating at $a=0$ on $D(H_0)$ gives

$$
H\,\Omega^{(\pm)}=\Omega^{(\pm)}\,H_0 .
$$

So $H$ restricted to $\operatorname{Ran}\Omega^{(\pm)}$ is unitarily equivalent to $H_0$ on $\mathcal H_{\rm ac}(H_0)$. Applied to generalized vectors, this is the statement $H|\psi_\alpha^{(\pm)}\rangle=E_\alpha|\psi_\alpha^{(\pm)}\rangle$ of ST1 §4 and §6.1.

The intertwining relation also fixes the spectral type of the range. For $\psi=\Omega^{(\pm)}g$,

$$
\langle\psi|e^{-iHa/\hbar}|\psi\rangle
=
\langle g|\Omega^{(\pm)\dagger}\Omega^{(\pm)}e^{-iH_0a/\hbar}|g\rangle
=
\langle g|e^{-iH_0a/\hbar}|g\rangle .
$$

The spectral measure of $\psi$ with respect to $H$ and that of $g$ with respect to $H_0$ have the same Fourier transform and therefore coincide. The exact scattering state has the same energy distribution as its free label, and in particular

$$
\operatorname{Ran}\Omega^{(\pm)}\subset\mathcal H_{\rm ac}(H).
$$

Energy conservation now follows. Replacing $a$ by $-a$ in the intertwining relation for $\Omega^{(-)}$ and taking the adjoint gives $\Omega^{(-)\dagger}e^{-iHa/\hbar}=e^{-iH_0a/\hbar}\Omega^{(-)\dagger}$. Therefore

$$
S\,e^{-iH_0a/\hbar}
=
\Omega^{(-)\dagger}\Omega^{(+)}e^{-iH_0a/\hbar}
=
\Omega^{(-)\dagger}e^{-iHa/\hbar}\Omega^{(+)}
=
e^{-iH_0a/\hbar}\Omega^{(-)\dagger}\Omega^{(+)}
=
e^{-iH_0a/\hbar}\,S .
$$

$S$ commutes with the whole free evolution group, hence with $H_0$ and every function of it:

$$
[S,H_0]=0 .
$$

In the reference basis the kernel $S_{\beta\alpha}$ is supported on the energy shell $E_\beta=E_\alpha$. This is the operator version of the energy conservation of ST1 §3. There it followed from the time-translation identity of $U_I$, with the limits taken formally; here it follows from the intertwining relation, with the limits under control. Physically, delaying the whole experiment by $a$ moves both labels by the same free motion and cannot change the switch between them.

---

## S5. Asymptotic completeness and the unitarity of $S$

Bound states are the first thing that can spoil unitarity, and they are orthogonal to both ranges. Let $H\chi_b=E_b\chi_b$ with $\chi_b$ normalizable. For every $g\in\mathcal H_{\rm ac}(H_0)$,

$$
\langle\chi_b|\Omega(t)g\rangle
=
\langle e^{-iHt/\hbar}\chi_b|e^{-iH_0t/\hbar}g\rangle
=
e^{iE_bt/\hbar}\langle\chi_b|e^{-iH_0t/\hbar}g\rangle
\longrightarrow0
$$

by Proposition S3.1 applied to $H_0$. Hence $\langle\chi_b|\Omega^{(\pm)}g\rangle=0$. The bound state stays near the origin while the free packet leaves. This is also contained in the stronger statement $\operatorname{Ran}\Omega^{(\pm)}\subset\mathcal H_{\rm ac}(H)$ of §S4. So far, then,

$$
\operatorname{Ran}\Omega^{(\pm)}
\subset
\mathcal H_{\rm ac}(H)
\subset
\mathcal H_{\rm pp}(H)^\perp
=
\mathcal H_{\rm ac}(H)\oplus\mathcal H_{\rm sc}(H).
$$

When, then, is $S$ unitary? Using $\Omega^{(\pm)\dagger}\Omega^{(\pm)}=1$ and $\Omega^{(\mp)}\Omega^{(\mp)\dagger}=P_\mp$,

$$
S^\dagger S=\Omega^{(+)\dagger}P_-\,\Omega^{(+)},
\qquad
SS^\dagger=\Omega^{(-)\dagger}P_+\,\Omega^{(-)} .
$$

**Proposition S5.1.** $S^\dagger S=1$ if and only if $\operatorname{Ran}\Omega^{(+)}\subset\operatorname{Ran}\Omega^{(-)}$, and $SS^\dagger=1$ if and only if $\operatorname{Ran}\Omega^{(-)}\subset\operatorname{Ran}\Omega^{(+)}$. Hence $S$ is unitary on $\mathcal H_{\rm ac}(H_0)$ if and only if

$$
\operatorname{Ran}\Omega^{(+)}=\operatorname{Ran}\Omega^{(-)} .
$$

*Proof.* For every $g$,
$$
\langle g|S^\dagger S|g\rangle
=
\|P_-\Omega^{(+)}g\|^2
\le
\|\Omega^{(+)}g\|^2
=
\|g\|^2 ,
$$
with equality if and only if $\Omega^{(+)}g\in\operatorname{Ran}\Omega^{(-)}$. The operator $1-S^\dagger S$ is positive, and it vanishes exactly when its quadratic form vanishes for every $g$. The second statement is the same argument with $+$ and $-$ exchanged. $\blacksquare$

$\operatorname{Ran}\Omega^{(+)}$ consists of the states that were free in the remote past, and $\operatorname{Ran}\Omega^{(-)}$ of those that will be free in the remote future. $S^\dagger S=1$ says that every state that came in free goes out free; $SS^\dagger=1$ says that every state that goes out free came in free.

The same condition controls the convergence of $U_I$ on vectors, completing Proposition S3.2.

**Proposition S5.2.** $U_I(t_f,t_i)g\to Sg$ in norm as $t_f\to+\infty$, $t_i\to-\infty$ if and only if $\Omega^{(+)}g\in\operatorname{Ran}\Omega^{(-)}$.

*Proof.* If $\Omega^{(+)}g=\Omega^{(-)}\phi$, then $\phi=\Omega^{(-)\dagger}\Omega^{(+)}g=Sg$, and
$$
U_I(t_f,t_i)g-Sg
=
\Omega(t_f)^\dagger\big[\Omega(t_i)g-\Omega^{(+)}g\big]
+
\Omega(t_f)^\dagger\big[\Omega^{(-)}\phi-\Omega(t_f)\phi\big],
$$
where $\Omega(t_f)^\dagger\Omega(t_f)\phi=\phi$ was used. Both brackets tend to zero in norm, and $\|\Omega(t_f)^\dagger\|=1$. Conversely, norm convergence implies $\|Sg\|=\lim\|U_Ig\|=\|g\|$, while $\|Sg\|=\|P_-\Omega^{(+)}g\|$ because $\Omega^{(-)\dagger}$ is isometric on $\operatorname{Ran}\Omega^{(-)}$ and annihilates its complement. Hence $\|P_-\Omega^{(+)}g\|=\|\Omega^{(+)}g\|$, i.e. $\Omega^{(+)}g\in\operatorname{Ran}\Omega^{(-)}$. $\blacksquare$

The strongest statement of this kind is asymptotic completeness. The wave operators are called asymptotically complete if

$$
\operatorname{Ran}\Omega^{(+)}=\operatorname{Ran}\Omega^{(-)}=\mathcal H_{\rm ac}(H)
\qquad\text{and}\qquad
\mathcal H_{\rm sc}(H)=\{0\}.
$$

Equivalently,

$$
\mathcal H=\mathcal H_{\rm pp}(H)\oplus\operatorname{Ran}\Omega^{(+)}=\mathcal H_{\rm pp}(H)\oplus\operatorname{Ran}\Omega^{(-)} .
$$

Every state is a superposition of bound states and of scattering states that are free in both the remote past and the remote future; there is no third kind. A singular continuous component would be a third kind. By RAGE it leaves every bounded region on time average, so it is not bound, yet it is orthogonal to both ranges, so it is never asymptotically free. Completeness implies the equality of ranges, hence the unitarity of $S$ by Proposition S5.1, and it is strictly stronger: it also says that the scattering states exhaust the continuum.

For the short-range potentials of Proposition S3.4, asymptotic completeness holds. This was proved by Agmon (1975) through the limiting absorption principle for the resolvent, and by Enss (1978) with a time-dependent geometric argument close in spirit to §S3.4: a state in the continuous subspace that is not yet free must, at late times, be in an outgoing region where the free and exact evolutions agree. For these potentials, therefore, $S$ is unitary, $U_I(t_f,t_i)\to S$ strongly on all of $\mathcal H$, and

$$
\Omega^{(+)}\Omega^{(+)\dagger}
=
\Omega^{(-)}\Omega^{(-)\dagger}
=
1-P_b ,
$$

where $P_b$ is the projector onto the bound states. In the generalized-vector notation of ST1 §4 and §6.1 this is the completeness relation of the exact Hamiltonian,

$$
\int d\alpha\,|\psi_\alpha^{(\pm)}\rangle\langle\psi_\alpha^{(\pm)}|
+
\sum_b|\chi_b\rangle\langle\chi_b|
=
1 ,
$$

which underlies the spectral representation of the full resolvent used in later notes.

A practical remark: unitarity refers to the full $S$ on all asymptotic states. If part of the outgoing states is left out of the description, for example product channels opened by the collision, the block of $S$ between the retained states $\mathcal P$ satisfies $(\mathcal PS\mathcal P)^\dagger(\mathcal PS\mathcal P)\le1$. The deficit is the probability carried into the omitted states. This is the origin of the subunitary elastic $S$ in photoassociation and inelastic loss.

Finally, we can return to the Schrödinger table we started from. Since $e^{-iH(t_f-t_i)/\hbar}=e^{-iH_0t_f/\hbar}U_I(t_f,t_i)e^{iH_0t_i/\hbar}$ exactly and $[S,H_0]=0$, Proposition S5.2 gives, for the prepared packet $\psi=e^{-iH_0t_i/\hbar}g$,

$$
\big\|e^{-iH(t_f-t_i)/\hbar}\psi-S\,e^{-iH_0(t_f-t_i)/\hbar}\psi\big\|
=
\big\|U_I(t_f,t_i)g-Sg\big\|
\longrightarrow0 .
$$

In the reference basis $S\,e^{-iH_0T/\hbar}$ has the kernel $S_{\beta\alpha}e^{-iE_\alpha T/\hbar}$: the $S$ table times a clock, as in [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#7.5 Why the folded switchboard has a limit|Scattering Theory 0, §7.5]]. By Proposition S3.1, $S\,e^{-iH_0T/\hbar}=e^{-iH_0T/\hbar}S$ tends to zero weakly and has no strong limit. The free clock alone is responsible for the absence of a Schrödinger limit.

---

## S6. Long-range potentials and ultracold interactions

### S6.1 Coulomb fails Cook's criterion

Let $V=\kappa/r$ with $\kappa=Z_1Z_2e^2/4\pi\varepsilon_0$. For $g\in\mathcal D$ the free packet at late times lies, by (b) and (c) of §S3.4, in the shell $p_{\min}|t|/m\lesssim r\lesssim p_{\max}|t|/m$ up to vanishing tails. Hence

$$
\|V\psi_t\|
\ge
\frac{|\kappa|\,m}{p_{\max}|t|}\,\|g\|\,\big(1-o(1)\big),
$$

and $\int^{\pm\infty}dt\,\|V\psi_t\|$ diverges logarithmically. This is not merely a failure of a sufficient condition: the ordinary Møller operators do not exist for the Coulomb potential (Dollard 1964). The reason is visible semiclassically. A component of momentum $\mathbf p$ moving along $\mathbf r\simeq\mathbf pt/m$ accumulates, relative to free motion, the extra phase

$$
-\frac{1}{\hbar}\int^{t}ds\,V\!\left(\frac{p s}{m}\right)
=
-\frac{m\kappa}{\hbar p}\ln|t|+\text{const}
=
-\eta\ln|t|+\text{const},
\qquad
\eta=\frac{m\kappa}{\hbar p}=\frac{\kappa}{\hbar v},
$$

where $\eta$ is the Sommerfeld parameter. This $p$-dependent phase grows without bound. By the mechanism of §S3.1 it is a clock that never stops, and $\Omega(t)g$ cannot converge. In the language of [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#7.5 Why the folded switchboard has a limit|Scattering Theory 0, §7.5]], the direction label settles but the where-and-when label drifts as $\ln|t|$.

### S6.2 Dollard's modified free dynamics

The remedy is to include the potential along the free trajectory in the reference motion. Replace $e^{-iH_0t/\hbar}$ by

$$
U_D(t)
=
\exp\!\left\{-\frac{i}{\hbar}\left[H_0t+\operatorname{sgn}(t)\,\frac{m\kappa}{|\mathbf p|}\ln\frac{2H_0|t|}{\hbar}\right]\right\},
$$

whose extra term has time derivative $V(|\mathbf p||t|/m)$. The constant inside the logarithm is a convention; changing it multiplies $S$ by a function of $H_0$. The modified Møller operators

$$
\Omega_D^{(\pm)}
=
\operatorname{s-}\lim_{t\to\mp\infty}e^{iHt/\hbar}\,U_D(t)
$$

exist and are asymptotically complete. They are isometric, and they satisfy the intertwining relation of §S4, because $U_D(t-a)^{-1}U_D(t)\to e^{-iH_0a/\hbar}$ as $|t|\to\infty$ (the logarithms differ by a vanishing amount). Consequently $S_D=\Omega_D^{(-)\dagger}\Omega_D^{(+)}$ is unitary and commutes with $H_0$. Since the modification is a function of $H_0$ alone, on the energy shell it only multiplies the $S$ kernel by an energy-dependent phase. It leaves $|S_{\beta\alpha}|$, and hence the Rutherford cross section, unchanged, and in partial waves it appears as the Coulomb phases $\sigma_l=\arg\Gamma(l+1+i\eta)$. Smooth long-range tails more general than Coulomb are handled by the same idea, with further refinements (Hörmander) when the decay is very slow.

### S6.3 Ultracold interactions and stronger decay conditions

The interactions of ST1 §6.4 all satisfy the hypothesis of Proposition S3.4 with $n>1$, so the ordinary $\Omega^{(\pm)}$ exist, asymptotic completeness holds, and everything in ST1 applies without modification. The internal structure (hyperfine and Zeeman levels) enters through the internal part of $H_0$, and the couplings between internal states in $V$ decay with the same tails. The hard core and the short-range chemistry play no role in the existence question, since at late times the free packet is far away from them.

Being short range in Cook's sense is the weakest of the decay conditions met in later notes. The low-energy threshold laws of [[Scattering Theory 6 - Low-Energy Scattering, Effective Range, and Scattering Length|Scattering Theory 6]] need faster decay. For a tail $\propto r^{-n}$, the $s$-wave scattering length is finite only for $n>3$, and the effective-range expansion $k\cot\delta_0=-1/a+r_ek^2/2+\cdots$ holds to order $k^2$ only for $n>5$. The van der Waals interaction meets all three conditions. For the atom–ion interaction $k\cot\delta_0$ acquires a term linear in $k$. For the $1/r^3$ dipole–dipole tail the phase shifts of all partial waves $l\ge1$ scale as $k$ at low energy instead of $k^{2l+1}$, so all partial waves contribute. These conditions change how the table looks at low energy, not whether it exists.

### S6.4 References

For the proofs omitted or sketched here, see Reed and Simon, *Methods of Modern Mathematical Physics*, Vol. III (*Scattering Theory*), and Taylor, *Scattering Theory*. The original references are Cook (1957) for the criterion, Dollard (1964) for the Coulomb problem, and Agmon (1975) and Enss (1978) for asymptotic completeness.
