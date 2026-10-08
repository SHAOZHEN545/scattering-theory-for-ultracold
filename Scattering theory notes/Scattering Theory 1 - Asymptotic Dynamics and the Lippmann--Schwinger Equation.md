This note develops the operator structure behind elementary scattering theory in a form that does not rely on a single incident plane wave plus an outgoing scattered wave. The basic objects are reference asymptotic states, asymptotic comparison maps, resolvents, and the transition operator. This is the language one needs before specializing to coordinate-space amplitudes, partial waves, cross sections, or particular scattering models.

The guiding physical experiment is simple:

$$
\begin{gather*}
\text{prepare separated fragments in an incoming asymptotic state} \\
\downarrow \\
\text{let the exact Hamiltonian act} \\
\downarrow \\
\text{detect separated fragments in an outgoing asymptotic state}
\end{gather*}
$$

The formalism below is a precise way of removing from this experiment the trivial motion that the fragments would have had even if no scattering interaction were present. What remains is the nontrivial input-output map.

---

## 1. The two Hamiltonians

Let

$$
H=H_0+V.
$$

The exact Hamiltonian $H$ generates the true laboratory time evolution. The reference Hamiltonian $H_0$ generates the motion used to define asymptotic states.

In the simplest elastic one-particle problem, $H_0$ may be just $\mathbf p^2/2m$. More generally, it can retain the relative motion and internal dynamics of separated subsystems that persist when the scattering interaction is absent.

Write the generalized eigenvectors of $H_0$ as

$$
H_0|\alpha\rangle=E_\alpha|\alpha\rangle .
$$

The label $\alpha$ collects all the quantum numbers needed to specify one **reference asymptotic state** $|\alpha\rangle$. It may be a momentum vector in the simplest problem, or it may include relative momenta and internal quantum numbers for separated subsystems. The exact contents of $\alpha$ depend on $H_0$ and the chosen basis. We use the schematic notation

$$
1=\int d\alpha\,|\alpha\rangle\langle\alpha|,\qquad
\langle\beta|\alpha\rangle=\delta(\beta-\alpha),
$$

where $d\alpha$ denotes both sums over discrete labels and integrations over continuous labels. Likewise, $\delta(\beta-\alpha)$ denotes a mixture of Kronecker deltas and Dirac deltas. Here $1$ is the identity on the reference asymptotic space spanned by these states.

The vectors $|\alpha\rangle$ are reference asymptotic states, not exact states during the collision. An exact scattering state evolves under $H$ and is labeled by the reference state to which it is compared in the remote past or future. Thus $\alpha$ specifies incoming asymptotic data, while $\beta$ specifies outgoing asymptotic data. This distinction between a reference state and the corresponding exact scattering state will be made explicit below.

---

## 2. Laboratory amplitudes and the interaction comparison

Represent the source's preparation and the state a detector accepts by normalizable reference packets

$$
|g\rangle=\int d\alpha\,g(\alpha)|\alpha\rangle ,\qquad
|h\rangle=\int d\beta\,h(\beta)|\beta\rangle ,
$$

with $g(\alpha)$ concentrated near the intended incoming labels and $h(\beta)$ near the selected outgoing ones. These are **labels** of free motions, not states the source prepares at $t=0$. The packet $|g\rangle$ names the incoming free motion $e^{-iH_0t/\hbar}|g\rangle$, which the fragments actually follow while they are still far apart, by its value at the reference time $t=0$. The state prepared at an early time $t_i$ is $e^{-iH_0t_i/\hbar}|g\rangle$, and the detector accepts $e^{-iH_0t_f/\hbar}|h\rangle$ at $t_f$. As $t_i\to-\infty$ the prepared state runs off and has no limit, but its label does not change. Why the packets are named this way, and why the real system at $t=0$ looks nothing like $|g\rangle$, can be intuitively seen with a solvable example in [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering|Scattering Theory 0]], §4.

The exact laboratory amplitude is the overlap of the detector's packet with the exactly evolved prepared state,

$$
\mathcal A_{hg}(t_f,t_i)
=
\langle h|e^{iH_0t_f/\hbar}
e^{-iH(t_f-t_i)/\hbar}
e^{-iH_0t_i/\hbar}|g\rangle .
$$

If $V=0$ the free factors cancel and $\mathcal A_{hg}=\langle h|g\rangle$; the interaction changes this input-output overlap. The operator in the middle is the interaction-picture evolution operator,

$$
U_I(t_f,t_i)
=
e^{iH_0t_f/\hbar}
e^{-iH(t_f-t_i)/\hbar}
e^{-iH_0t_i/\hbar}.
$$

This is not a change of physical frame. It is the laboratory amplitude written after factoring out the known reference motion at the preparation and detection ends. $U_I(t,t_i)|g\rangle$ is the label of the free motion the system would follow if $V$ were switched off at time $t$, and scattering is the change of this label during the collision; see [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering|Scattering Theory 0]], §7.

For ideal asymptotic-state labels define

$$
A_{\beta\alpha}(t_f,t_i)
=
\langle\beta|U_I(t_f,t_i)|\alpha\rangle .
$$

For continuum labels this kernel is distribution-valued. Physical amplitudes are obtained only after smearing it with normalizable packets $g$ and $h$.

The operator $U_I$ satisfies

$$
i\hbar\frac{\partial}{\partial t}U_I(t,t_i)
=
V_I(t)U_I(t,t_i),
$$

where

$$
V_I(t)=e^{iH_0t/\hbar}Ve^{-iH_0t/\hbar}.
$$

Equivalently,

$$
U_I(t,t_i)
=
1-\frac{i}{\hbar}\int_{t_i}^{t}dt'\,V_I(t')U_I(t',t_i).
$$

Taking matrix elements between reference asymptotic states and inserting their completeness relation gives

$$
A_{\beta\alpha}(t,t_i)
=
\delta(\beta-\alpha)
-\frac{i}{\hbar}\int_{t_i}^{t}dt'\int d\gamma\,
V_{\beta\gamma}
e^{i(E_\beta-E_\gamma)t'/\hbar}
A_{\gamma\alpha}(t',t_i),
$$

where

$$
V_{\beta\gamma}=\langle\beta|V|\gamma\rangle .
$$

This equation is the time-dependent starting point. It says that the transition amplitude between asymptotic states is built from insertions of $V$, with phases from $H_0$ evolution between them.

---

## 3. The asymptotic input-output map

**A scattering experiment does not ask for the detailed state during the collision.** It asks what a packet prepared in the remote past becomes when compared with asymptotic detector states in the remote future. On the scattering subspace one defines

$$
S_{\beta\alpha}
=
\langle\beta|S|\alpha\rangle
=
\lim_{t_f\to+\infty,\;t_i\to-\infty}
\langle\beta|U_I(t_f,t_i)|\alpha\rangle ,
$$

with the limit understood through wave packets, adiabatic switching, or Møller operators. Thus $S$ is the asymptotic input-output operator in the reference eigenbasis.

The identity contribution in $S$ represents the part of the packet that retains the same asymptotic-state label. Everything else is produced by the interaction. Since $H$ and $H_0$ are time independent, the nontrivial asymptotic process is invariant under a simultaneous time translation of the entire collision history. This invariance is what produces total energy conservation.

The origin of the energy delta function can be seen directly from the Dyson series. The first-order term is

$$
S^{(1)}_{\beta\alpha}
=
-\frac{i}{\hbar}
\int_{-\infty}^{+\infty}dt\,
\langle\beta|V_I(t)|\alpha\rangle .
$$

Since

$$
\langle\beta|V_I(t)|\alpha\rangle
=
e^{i(E_\beta-E_\alpha)t/\hbar}V_{\beta\alpha},
$$

one obtains

$$
S^{(1)}_{\beta\alpha}
=
-2\pi i\,\delta(E_\beta-E_\alpha)V_{\beta\alpha}.
$$

At second order,

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

Set $\tau=t_1-t_2\geq 0$. The phase separates as

$$
e^{i(E_\beta-E_\alpha)t_1/\hbar}
e^{i(E_\alpha-E_\gamma)\tau/\hbar}.
$$

The integral over the overall time $t_1$ gives the same universal factor

$$
2\pi\hbar\,\delta(E_\beta-E_\alpha).
$$

The remaining ordered time interval is convergent after the usual infinitesimal damping and gives

$$
-\frac{i}{\hbar}
\int_0^{+\infty}d\tau\,
e^{i(E_\alpha-E_\gamma)\tau/\hbar}e^{-\eta\tau/\hbar}
=
\frac{1}{E_\alpha-E_\gamma+i\eta}.
$$

Therefore

$$
S^{(2)}_{\beta\alpha}
=
-2\pi i\,\delta(E_\beta-E_\alpha)
\int d\gamma\,
V_{\beta\gamma}
\frac{1}{E_\alpha-E_\gamma+i0}
V_{\gamma\alpha}.
$$

The same structure persists to all orders. One overall time integral gives energy conservation, while the ordered time differences give the energy denominators of intermediate propagation under $H_0$. This motivates the definition

$$
S_{\beta\alpha}
=
\delta(\beta-\alpha)
-
2\pi i\,\delta(E_\beta-E_\alpha)T_{\beta\alpha}(E_\alpha).
$$

This equation is a definition of the reduced transition amplitude $T_{\beta\alpha}$, but it is not an arbitrary convention. The Dyson expansion shows that $T$ is precisely the coefficient that remains after removing the identity term and the universal on-shell energy-conservation delta function.

The first terms are

$$
T_{\beta\alpha}(E)
=
V_{\beta\alpha}
+
\int d\gamma\,
V_{\beta\gamma}
\frac{1}{E-E_\gamma+i0}
V_{\gamma\alpha}
+\cdots .
$$

Thus the first Born approximation is

$$
T_{\beta\alpha}(E)\simeq V_{\beta\alpha}.
$$

It is the leading term of the same transition operator that later satisfies an exact integral equation.

Only the on-shell part of $T$ appears in $S$, because $S$ contains $\delta(E_\beta-E_\alpha)$. The operator $T(E)$ is nevertheless defined as a function of a spectral parameter $E$ because the integral equation that sums repeated interactions naturally depends on that parameter. Off-shell matrix elements are useful inside the equation; the physical asymptotic transition uses the on-shell value.

---

## 4. Resolvents and boundary prescriptions

The free resolvent is the operator-valued function

$$
G_0(z)=\frac{1}{z-H_0}
$$

away from the spectrum of $H_0$. Scattering requires approaching the continuous spectrum from one side of the complex energy plane. The two boundary values are

$$
G_0^{(+)}(E)=\frac{1}{E-H_0+i0},
\qquad
G_0^{(-)}(E)=\frac{1}{E-H_0-i0}.
$$

The signs are not decorative. They encode a time boundary condition. With the convention that Schrödinger phases are $e^{-iEt/\hbar}$,

$$
G_0^{(+)}(E)
=
-\frac{i}{\hbar}
\lim_{\eta\downarrow0}
\int_0^{+\infty}d\tau\,
e^{i(E-H_0)\tau/\hbar}
e^{-\eta\tau/\hbar}.
$$

This representation is just the elementary half-line integral

$$
-\frac{i}{\hbar}
\int_0^{+\infty}d\tau\,
e^{i(E-E_\gamma)\tau/\hbar}
e^{-\eta\tau/\hbar}
=
\frac{1}{E-E_\gamma+i\eta}.
$$

Thus $+i0$ appears whenever an intermediate reference state propagates through a positive time interval after an earlier interaction. This is the same half-line integral that arose from the time ordering in the Dyson expansion.

The opposite prescription is

$$
G_0^{(-)}(E)
=
\frac{i}{\hbar}
\lim_{\eta\downarrow0}
\int_0^{+\infty}d\tau\,
e^{-i(E-H_0)\tau/\hbar}
e^{-\eta\tau/\hbar}.
$$

Equivalently, it is the boundary value appropriate to the opposite time orientation.

The distribution identity

$$
\frac{1}{x\pm i0}
=
\operatorname{P}\frac{1}{x}
\mp i\pi\delta(x)
$$

is often useful, but it should not be mistaken for the primary meaning of the prescription. The primary meaning is the selection of a boundary condition. At the operator level, the two boundary values distinguish the scattering solution selected by remote-past preparation from the one selected by remote-future testing. Their coordinate-space wave behavior is discussed after a representation has been chosen.

The phrase "incoming state" can therefore be slightly misleading if it is attached too literally to the sign. A state prepared in the remote past and allowed to scatter forward in time is represented by a $+$ scattering vector. That $+$ vector has an incoming free asymptote in the past and outgoing scattered behavior in the future. The $+i0$ prescription is the analytic trace of that forward-in-time construction.

---

## 5. The transition operator

The Born series suggested by the Dyson expansion can be summed by the operator equation

$$
T(E)=V+VG_0^{(+)}(E)T(E).
$$

In the reference eigenbasis,

$$
T_{\beta\alpha}(E)
=
V_{\beta\alpha}
+
\int d\gamma\,
V_{\beta\gamma}
\frac{1}{E-E_\gamma+i0}
T_{\gamma\alpha}(E).
$$

This equation says that a transition from $\alpha$ to $\beta$ is either a single interaction $V_{\beta\alpha}$, or an interaction from an intermediate reference state $\gamma$ into $\beta$ after the system has already accumulated the full transition amplitude from $\alpha$ into $\gamma$ at the same total energy.

Iterating the equation gives

$$
T(E)
=
V
+
VG_0^{(+)}(E)V
+
VG_0^{(+)}(E)VG_0^{(+)}(E)V
+\cdots .
$$

The transition operator is the reduced dynamical part of the scattering matrix. Once the universal identity and energy-conservation factors have been separated, the remaining physics is encoded in $T$.

---

## 6. Stationary scattering vectors

The stationary scattering vector associated with an incoming asymptotic state $|\alpha\rangle$ is defined by

$$
|\psi_\alpha^{(+)}\rangle
=
|\alpha\rangle
+
G_0^{(+)}(E_\alpha)V|\psi_\alpha^{(+)}\rangle .
$$

This is the Lippmann--Schwinger equation. It is not a separate postulate added after the time-dependent construction. It is the fixed-energy form of the same asymptotic preparation problem. The reference vector $|\alpha\rangle$ gives the incoming asymptotic data; the resolvent supplies the boundary prescription for the scattered part.

Multiplying by $V$ gives

$$
V|\psi_\alpha^{(+)}\rangle
=
V|\alpha\rangle
+
VG_0^{(+)}(E_\alpha)V|\psi_\alpha^{(+)}\rangle .
$$

Comparing with

$$
T(E_\alpha)|\alpha\rangle
=
V|\alpha\rangle
+
VG_0^{(+)}(E_\alpha)T(E_\alpha)|\alpha\rangle
$$

shows that

$$
T(E_\alpha)|\alpha\rangle
=
V|\psi_\alpha^{(+)}\rangle .
$$

Therefore

$$
T_{\beta\alpha}(E_\alpha)
=
\langle\beta|T(E_\alpha)|\alpha\rangle
=
\langle\beta|V|\psi_\alpha^{(+)}\rangle .
$$

This formula has one reference asymptotic vector and one exact scattering vector because $T$ is the reduced amplitude between an asymptotic label and a fully dressed collision state. The interaction history is contained in $|\psi_\alpha^{(+)}\rangle$; the detector label is supplied by $\langle\beta|$.

The Lippmann--Schwinger equation also implies the exact stationary eigenvalue equation. Apply $E_\alpha-H_0$ to both sides:

$$
(E_\alpha-H_0)|\psi_\alpha^{(+)}\rangle
=
(E_\alpha-H_0)|\alpha\rangle
+
(E_\alpha-H_0)G_0^{(+)}(E_\alpha)V|\psi_\alpha^{(+)}\rangle .
$$

Since $H_0|\alpha\rangle=E_\alpha|\alpha\rangle$, the first term vanishes. Since $(E_\alpha-H_0)G_0^{(+)}(E_\alpha)$ is the identity in the distributional sense appropriate to the chosen boundary value, the second term gives

$$
(E_\alpha-H_0)|\psi_\alpha^{(+)}\rangle
=
V|\psi_\alpha^{(+)}\rangle .
$$

Equivalently,

$$
H|\psi_\alpha^{(+)}\rangle
=
E_\alpha|\psi_\alpha^{(+)}\rangle .
$$

Thus $|\psi_\alpha^{(+)}\rangle$ is a generalized eigenvector of the exact Hamiltonian, not of $H_0$. What makes it a scattering state labelled by $\alpha$ is its asymptotic boundary condition.

There is a companion solution

$$
|\psi_\beta^{(-)}\rangle
=
|\beta\rangle
+
G_0^{(-)}(E_\beta)V|\psi_\beta^{(-)}\rangle .
$$

It is selected by the opposite boundary prescription. For Hermitian interactions, the same on-shell transition amplitude can be written in either form,

$$
T_{\beta\alpha}(E)
=
\langle\beta|V|\psi_\alpha^{(+)}\rangle
=
\langle\psi_\beta^{(-)}|V|\alpha\rangle,
\qquad
E=E_\alpha=E_\beta.
$$

The two forms are often called prior and post forms. They are equal on shell because they describe the same reduced input-output amplitude using opposite asymptotic comparisons.

---

## 7. Møller operators

The time-dependent and stationary descriptions are tied together by the Møller operators. With the convention used here,

$$
\Omega^{(+)}
=
\operatorname{s-}\lim_{t\to-\infty}
e^{iHt/\hbar}e^{-iH_0t/\hbar},
$$

and

$$
\Omega^{(-)}
=
\operatorname{s-}\lim_{t\to+\infty}
e^{iHt/\hbar}e^{-iH_0t/\hbar}.
$$

The superscript refers to the boundary prescription of the corresponding scattering vector, not simply to the sign of the time limit.

The strong limit means convergence on vectors, not uniform convergence of operators. More explicitly, for every normalizable asymptotic wave packet $|g\rangle$ in the scattering subspace,

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

and similarly for $\Omega^{(-)}$ as $t\to+\infty$. This is weaker than convergence in operator norm, but it is exactly the kind of convergence needed for physical wave packets. The restriction to the scattering subspace excludes states not represented by freely evolving reference asymptotic packets, such as bound states of the full Hamiltonian.

The Møller operators generate the exact scattering vectors:

$$
|\psi_\alpha^{(+)}\rangle=\Omega^{(+)}|\alpha\rangle,
\qquad
|\psi_\beta^{(-)}\rangle=\Omega^{(-)}|\beta\rangle .
$$

They also give the scattering operator

$$
S=\Omega^{(-)\dagger}\Omega^{(+)} .
$$

This formula is the clean asymptotic comparison between the exact state determined by remote-past preparation and the exact state associated with remote-future detection. It is also the same $S$ that appeared in the interaction-picture limit. Indeed, formally,

$$
\Omega^{(-)\dagger}\Omega^{(+)}
=
\lim_{t_f\to+\infty,\;t_i\to-\infty}
e^{iH_0t_f/\hbar}
e^{-iH(t_f-t_i)/\hbar}
e^{-iH_0t_i/\hbar},
$$

which is exactly the limiting form of $U_I(t_f,t_i)$. Therefore

$$
S_{\beta\alpha}
=
\langle\beta|S|\alpha\rangle
=
\langle\psi_\beta^{(-)}|\psi_\alpha^{(+)}\rangle .
$$

The stationary overlap, the Møller-operator expression, and the interaction-picture limit are three descriptions of the same asymptotic input-output map.

The word "formally" above hides three questions: whether the limits defining $\Omega^{(\pm)}$ exist, in what sense the double limit of $U_I(t_f,t_i)$ converges to $\Omega^{(-)\dagger}\Omega^{(+)}$, and whether the resulting $S$ is unitary. The subsections below answer them. Their physical content (the Schrödinger evolution never settles, while the folded evolution stops changing once the packet has left the interaction region) is developed pictorially in [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#7.5 Why the folded switchboard has a limit|Scattering Theory 0, §7.5]]. Here the same statements are proved.

Throughout, $\mathcal H$ is the Hilbert space and $P_A(B)$ is the spectral projector of a self-adjoint operator $A$ onto energies in a Borel set $B\subset\mathbb R$. Each vector $\chi$ has a spectral measure $\mu^A_\chi(B)=\langle\chi|P_A(B)|\chi\rangle$, and the Lebesgue decomposition of these measures splits the Hilbert space into three mutually orthogonal subspaces, each invariant under $A$,

$$
\mathcal H
=
\mathcal H_{\rm pp}(A)\oplus\mathcal H_{\rm ac}(A)\oplus\mathcal H_{\rm sc}(A).
$$

Vectors in $\mathcal H_{\rm pp}(A)$ have spectral measures made of point masses; $\mathcal H_{\rm pp}(H)$ is spanned by the bound states of $H$. Vectors in $\mathcal H_{\rm ac}(A)$ have spectral measures with a density in $E$. Vectors in $\mathcal H_{\rm sc}(A)$ have continuous spectral measures concentrated on sets of zero Lebesgue measure. The Møller operators are defined on $\mathcal H_{\rm ac}(H_0)$. For $H_0=\mathbf p^2/2m$, and more generally whenever $H_0$ contains the kinetic energy of free relative motion, this is all of $\mathcal H$.

### 7.1 The Schrödinger evolution has no asymptotic limit

**Proposition 7.1.** For every $\chi\in\mathcal H_{\rm ac}(H)$ and every $\varphi\in\mathcal H$,

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

### 7.2 Exact factorization of the interaction-picture operator

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

The vector $\Omega(t_i)|g\rangle=e^{iHt_i/\hbar}\big(e^{-iH_0t_i/\hbar}|g\rangle\big)$ is the exact state at the reference time $0$ whose exact evolution passes through the freely transported packet at $t_i$. Likewise, $\Omega(t_f)|h\rangle$ is the exact state at time $0$ that will coincide with the detector's packet at $t_f$. The laboratory amplitude of §2 is therefore

$$
\mathcal A_{hg}(t_f,t_i)
=
\langle\Omega(t_f)h|\Omega(t_i)g\rangle .
$$

The two times have been separated: $t_i$ enters only the ket and $t_f$ only the bra. The double limit becomes two single limits, one at each end, and the definition of $\Omega^{(\pm)}$ above is exactly the requirement that each of them exist.

**Proposition 7.2.** If $\Omega(t)g\to\Omega^{(+)}g$ as $t\to-\infty$ and $\Omega(t)h\to\Omega^{(-)}h$ as $t\to+\infty$, both in norm, then

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

This turns the "formally" of §7 into a theorem at the level of amplitudes between normalizable packets, which is all that §2 requires. The adjoint of a strongly convergent family converges in general only weakly, so convergence of $U_I(t_f,t_i)$ itself on vectors needs an additional property; it is settled in §7.6.

### 7.3 Existence: Cook's criterion

**Proposition 7.3 (Cook).** Assume that $V$ is $H_0$-bounded with relative bound less than one, so that $D(H)=D(H_0)$ by the Kato–Rellich theorem; for bounded $V$ this is automatic. Suppose there is a dense set $\mathcal D\subset\mathcal H_{\rm ac}(H_0)\cap D(H_0)$ such that for every $g\in\mathcal D$

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

### 7.4 Short-range potentials in three dimensions

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

> [!NOTE]- Derivation: the free-packet estimates
> **The propagator.** $\langle\mathbf r|e^{-iH_0t/\hbar}|\mathbf r'\rangle=\int\frac{d^3p}{(2\pi\hbar)^3}\,e^{i\mathbf p\cdot(\mathbf r-\mathbf r')/\hbar}e^{-ip^2t/2m\hbar}$ factorizes into three Gaussian (Fresnel) integrals, each giving $\left(\frac{m}{2\pi i\hbar t}\right)^{1/2}e^{im(x-x')^2/2\hbar t}$.
>
> **(a)** The modulus of the kernel is $(m/2\pi\hbar|t|)^{3/2}$ for all $\mathbf r,\mathbf r'$, so $|\psi_t(\mathbf r)|\le(m/2\pi\hbar|t|)^{3/2}\int d^3r'\,|g(\mathbf r')|$.
>
> **(b)** Expand $|\mathbf r-\mathbf r'|^2=r^2-2\mathbf r\cdot\mathbf r'+r'^2$:
> $$
> \psi_t(\mathbf r)=\left(\frac{m}{2\pi i\hbar t}\right)^{3/2}e^{imr^2/2\hbar t}\int d^3r'\,e^{-i(m\mathbf r/t)\cdot\mathbf r'/\hbar}\,e^{imr'^2/2\hbar t}\,g(\mathbf r') .
> $$
> Without the factor $e^{imr'^2/2\hbar t}$ the integral is $(2\pi\hbar)^{3/2}\hat g(m\mathbf r/t)$, which gives the leading term. The map $g\mapsto(m/it)^{3/2}e^{imr^2/2\hbar t}\hat g(m\mathbf r/t)$ is unitary, since the substitution $\mathbf p=m\mathbf r/t$ gives $\int d^3r\,(m/|t|)^3|\hat g(m\mathbf r/t)|^2=\int d^3p\,|\hat g(\mathbf p)|^2$. The error is therefore the image of $(e^{imr'^2/2\hbar t}-1)g$ under a unitary map, and its norm tends to zero by dominated convergence.
>
> **(c)** Write $\psi_t(\mathbf r)=(2\pi\hbar)^{-3/2}\int d^3p\,\hat g(\mathbf p)\,e^{i\Phi(\mathbf p)/\hbar}$ with $\Phi=\mathbf p\cdot\mathbf r-p^2t/2m$ and $\nabla_{\mathbf p}\Phi=\mathbf r-\mathbf pt/m$. For $r\le p_{\min}|t|/2m$ and $\mathbf p$ in the support of $\hat g$, $|\nabla_{\mathbf p}\Phi|\ge|\mathbf p||t|/m-r\ge p_{\min}|t|/2m$: the phase is nowhere stationary. The operator $L=-i\hbar\,|\nabla\Phi|^{-2}\,\nabla\Phi\cdot\nabla_{\mathbf p}$ satisfies $Le^{i\Phi/\hbar}=e^{i\Phi/\hbar}$. Integrating by parts $N$ times moves $(L^{\rm T})^N$ onto $\hat g$. Since $\partial_{p_i}\partial_{p_j}\Phi=-(t/m)\delta_{ij}$, each application of $L^{\rm T}$ costs a factor bounded by a constant times $1/|t|$, uniformly in $\mathbf r$ in this region. Hence $|\psi_t(\mathbf r)|\le C_N|t|^{-N}$.

**Proposition 7.4.** Let $V=V_1+V_2$ with $V_1\in L^2(\mathbb R^3)$ and $V_2$ bounded with

$$
|V_2(\mathbf r)|\le C\,(1+r)^{-n},\qquad n>1 .
$$

Then $\Omega^{(+)}$ and $\Omega^{(-)}$ exist on all of $L^2(\mathbb R^3)$.

*Proof.* A potential in $L^2+L^\infty$ is infinitesimally $H_0$-bounded in three dimensions, so Proposition 7.3 applies once its integral condition is checked. Take

$$
\mathcal D=\{g:\ \hat g\in C_c^\infty(\mathbb R^3\setminus\{0\})\}.
$$

This set is dense in $L^2(\mathbb R^3)$ and contained in $D(H_0)$, and each $g\in\mathcal D$ is a Schwartz function, so $\|g\|_1<\infty$. Fix $g\in\mathcal D$ with momentum support in $p_{\min}\le|\mathbf p|\le p_{\max}$ and take $|t|\ge1$.

**The local part.** By (a),

$$
\|V_1\psi_t\|
\le
\|V_1\|_2\,\|\psi_t\|_\infty
\le
\|V_1\|_2\left(\frac{m}{2\pi\hbar|t|}\right)^{3/2}\|g\|_1 ,
$$

which decays as $|t|^{-3/2}$.

**The tail.** Split space at $R_t=p_{\min}|t|/2m$. Inside, use (c); outside, use the decay of $V_2$:

$$
\|V_2\psi_t\|
\le
\|V_2\|_\infty
\left(\tfrac{4\pi}{3}R_t^3\right)^{1/2}C_N\,(1+|t|)^{-N}
+
C\,R_t^{-n}\,\|g\| .
$$

The first term decays faster than any power, and the second decays as $|t|^{-n}$. Both pieces are integrable at $t\to\pm\infty$ when $n>1$, and Proposition 7.3 gives the result. $\blacksquare$

The proof uses only where the free packet is at late times. By (b) it sits at distances $r\simeq p|t|/m$, so $\|V\psi_t\|$ is essentially $|V|$ evaluated at $p|t|/m$, and the threshold $n>1$ is the integrability of $|t|^{-n}$. This is the quantum version of the classical count in the remark "how far can the blue circle reach?" of [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#7.5 Why the folded switchboard has a limit|Scattering Theory 0, §7.5]], where the position part of the label drifts at the rate $t^{-n}$.

Two technical points deserve mention. First, excluding momenta near zero is what makes the packet leave at a finite minimum speed; slow components are recovered by density in Step 3 of Proposition 7.3, so this is not a physical restriction. Second, the dispersive estimate alone would give the result only for $V\in L^2$, which at infinity means $n>3/2$; the propagation estimate (c) is what reaches $n>1$. The $L^2$ piece $V_1$ accommodates local singularities milder than $r^{-3/2}$. Realistic interatomic potentials have a strongly repulsive core, roughly $r^{-12}$, which lies outside $L^2+L^\infty$. Such potentials require defining $H$ as a quadratic-form sum and a corresponding variant of Cook's argument, but the conclusion depends only on the tail, because at late times the free packet is far from the core.

### 7.5 Isometry, intertwining, and energy conservation

**Isometry.** For every $g\in\mathcal H_{\rm ac}(H_0)$,

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

is the orthogonal projector onto it; $\Omega^{(\pm)\dagger}$ annihilates $(\operatorname{Ran}\Omega^{(\pm)})^\perp$. Thus $\Omega^{(\pm)}$ is a unitary map from $\mathcal H_{\rm ac}(H_0)$ onto its range, but not in general onto $\mathcal H$: $P_\pm\ne1$ when $H$ has bound states (§7.6). This is why the unitarity of $S=\Omega^{(-)\dagger}\Omega^{(+)}$ is not automatic.

**Intertwining.** For every real $a$,

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

So $H$ restricted to $\operatorname{Ran}\Omega^{(\pm)}$ is unitarily equivalent to $H_0$ on $\mathcal H_{\rm ac}(H_0)$. Applied to generalized vectors, this is the statement $H|\psi_\alpha^{(\pm)}\rangle=E_\alpha|\psi_\alpha^{(\pm)}\rangle$ of §6.

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

**Energy conservation.** Replacing $a$ by $-a$ in the intertwining relation for $\Omega^{(-)}$ and taking the adjoint gives $\Omega^{(-)\dagger}e^{-iHa/\hbar}=e^{-iH_0a/\hbar}\Omega^{(-)\dagger}$. Therefore

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

In the reference basis the kernel $S_{\beta\alpha}$ is supported on the energy shell $E_\beta=E_\alpha$. This is the operator origin of the factor $\delta(E_\beta-E_\alpha)$ in §3. There it was found order by order in the Dyson series; here it follows from the intertwining relation without any expansion. Physically, delaying the whole experiment by $a$ moves both labels by the same free motion and cannot change the switch between them.

### 7.6 Asymptotic completeness and the unitarity of $S$

**Bound states are orthogonal to both ranges.** Let $H\chi_b=E_b\chi_b$ with $\chi_b$ normalizable. For every $g\in\mathcal H_{\rm ac}(H_0)$,

$$
\langle\chi_b|\Omega(t)g\rangle
=
\langle e^{-iHt/\hbar}\chi_b|e^{-iH_0t/\hbar}g\rangle
=
e^{iE_bt/\hbar}\langle\chi_b|e^{-iH_0t/\hbar}g\rangle
\longrightarrow0
$$

by Proposition 7.1 applied to $H_0$. Hence $\langle\chi_b|\Omega^{(\pm)}g\rangle=0$. The bound state stays near the origin while the free packet leaves. This is also contained in the stronger statement $\operatorname{Ran}\Omega^{(\pm)}\subset\mathcal H_{\rm ac}(H)$ of §7.5. So far, then,

$$
\operatorname{Ran}\Omega^{(\pm)}
\subset
\mathcal H_{\rm ac}(H)
\subset
\mathcal H_{\rm pp}(H)^\perp
=
\mathcal H_{\rm ac}(H)\oplus\mathcal H_{\rm sc}(H).
$$

**The unitarity criterion.** Using $\Omega^{(\pm)\dagger}\Omega^{(\pm)}=1$ and $\Omega^{(\mp)}\Omega^{(\mp)\dagger}=P_\mp$,

$$
S^\dagger S=\Omega^{(+)\dagger}P_-\,\Omega^{(+)},
\qquad
SS^\dagger=\Omega^{(-)\dagger}P_+\,\Omega^{(-)} .
$$

**Proposition 7.5.** $S^\dagger S=1$ if and only if $\operatorname{Ran}\Omega^{(+)}\subset\operatorname{Ran}\Omega^{(-)}$, and $SS^\dagger=1$ if and only if $\operatorname{Ran}\Omega^{(-)}\subset\operatorname{Ran}\Omega^{(+)}$. Hence $S$ is unitary on $\mathcal H_{\rm ac}(H_0)$ if and only if

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

The same condition controls the convergence of $U_I$ on vectors, completing Proposition 7.2.

**Proposition 7.6.** $U_I(t_f,t_i)g\to Sg$ in norm as $t_f\to+\infty$, $t_i\to-\infty$ if and only if $\Omega^{(+)}g\in\operatorname{Ran}\Omega^{(-)}$.

*Proof.* If $\Omega^{(+)}g=\Omega^{(-)}\phi$, then $\phi=\Omega^{(-)\dagger}\Omega^{(+)}g=Sg$, and

$$
U_I(t_f,t_i)g-Sg
=
\Omega(t_f)^\dagger\big[\Omega(t_i)g-\Omega^{(+)}g\big]
+
\Omega(t_f)^\dagger\big[\Omega^{(-)}\phi-\Omega(t_f)\phi\big],
$$

where $\Omega(t_f)^\dagger\Omega(t_f)\phi=\phi$ was used. Both brackets tend to zero in norm, and $\|\Omega(t_f)^\dagger\|=1$. Conversely, norm convergence implies $\|Sg\|=\lim\|U_Ig\|=\|g\|$, while $\|Sg\|=\|P_-\Omega^{(+)}g\|$ because $\Omega^{(-)\dagger}$ is isometric on $\operatorname{Ran}\Omega^{(-)}$ and annihilates its complement. Hence $\|P_-\Omega^{(+)}g\|=\|\Omega^{(+)}g\|$, i.e. $\Omega^{(+)}g\in\operatorname{Ran}\Omega^{(-)}$. $\blacksquare$

**Asymptotic completeness.** The wave operators are called asymptotically complete if

$$
\operatorname{Ran}\Omega^{(+)}=\operatorname{Ran}\Omega^{(-)}=\mathcal H_{\rm ac}(H)
\qquad\text{and}\qquad
\mathcal H_{\rm sc}(H)=\{0\}.
$$

Equivalently,

$$
\mathcal H=\mathcal H_{\rm pp}(H)\oplus\operatorname{Ran}\Omega^{(+)}=\mathcal H_{\rm pp}(H)\oplus\operatorname{Ran}\Omega^{(-)} .
$$

Every state is a superposition of bound states and of scattering states that are free in both the remote past and the remote future; there is no third kind. A singular continuous component would be a third kind. By RAGE it leaves every bounded region on time average, so it is not bound, yet it is orthogonal to both ranges, so it is never asymptotically free. Completeness implies the equality of ranges, hence the unitarity of $S$ by Proposition 7.5, and it is strictly stronger: it also says that the scattering states exhaust the continuum.

For the short-range potentials of Proposition 7.4, asymptotic completeness holds. This was proved by Agmon (1975) through the limiting absorption principle for the resolvent, and by Enss (1978) with a time-dependent geometric argument close in spirit to §7.4: a state in the continuous subspace that is not yet free must, at late times, be in an outgoing region where the free and exact evolutions agree. For these potentials, therefore, $S$ is unitary, $U_I(t_f,t_i)\to S$ strongly on all of $\mathcal H$, and

$$
\Omega^{(+)}\Omega^{(+)\dagger}
=
\Omega^{(-)}\Omega^{(-)\dagger}
=
1-P_b ,
$$

where $P_b$ is the projector onto the bound states. In the generalized-vector notation of §6 this is the completeness relation of the exact Hamiltonian,

$$
\int d\alpha\,|\psi_\alpha^{(\pm)}\rangle\langle\psi_\alpha^{(\pm)}|
+
\sum_b|\chi_b\rangle\langle\chi_b|
=
1 ,
$$

which underlies the spectral representation of the full resolvent used in later notes.

Unitarity refers to the full $S$ on all asymptotic states. If part of the outgoing states is left out of the description, for example product channels opened by the collision, the block of $S$ between the retained states $\mathcal P$ satisfies $(\mathcal PS\mathcal P)^\dagger(\mathcal PS\mathcal P)\le1$. The deficit is the probability carried into the omitted states. This is the origin of the subunitary elastic $S$ in photoassociation and inelastic loss.

**The Schrödinger table revisited.** Since $e^{-iH(t_f-t_i)/\hbar}=e^{-iH_0t_f/\hbar}U_I(t_f,t_i)e^{iH_0t_i/\hbar}$ exactly and $[S,H_0]=0$, Proposition 7.6 gives, for the prepared packet $\psi=e^{-iH_0t_i/\hbar}g$,

$$
\big\|e^{-iH(t_f-t_i)/\hbar}\psi-S\,e^{-iH_0(t_f-t_i)/\hbar}\psi\big\|
=
\big\|U_I(t_f,t_i)g-Sg\big\|
\longrightarrow0 .
$$

In the reference basis $S\,e^{-iH_0T/\hbar}$ has the kernel $S_{\beta\alpha}e^{-iE_\alpha T/\hbar}$: the $S$ table times a clock, as in [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#7.5 Why the folded switchboard has a limit|Scattering Theory 0, §7.5]]. By Proposition 7.1, $S\,e^{-iH_0T/\hbar}=e^{-iH_0T/\hbar}S$ tends to zero weakly and has no strong limit. The free clock alone is responsible for the absence of a Schrödinger limit.

### 7.7 Long-range potentials

**Coulomb fails Cook's criterion.** Let $V=\kappa/r$ with $\kappa=Z_1Z_2e^2/4\pi\varepsilon_0$. For $g\in\mathcal D$ the free packet at late times lies, by (b) and (c) of §7.4, in the shell $p_{\min}|t|/m\lesssim r\lesssim p_{\max}|t|/m$ up to vanishing tails. Hence

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

where $\eta$ is the Sommerfeld parameter. This $p$-dependent phase grows without bound. By the mechanism of §7.1 it is a clock that never stops, and $\Omega(t)g$ cannot converge. In the language of [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#7.5 Why the folded switchboard has a limit|Scattering Theory 0, §7.5]], the direction label settles but the where-and-when label drifts as $\ln|t|$.

**Dollard's modified free dynamics.** The remedy is to include the potential along the free trajectory in the reference motion. Replace $e^{-iH_0t/\hbar}$ by

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

exist and are asymptotically complete. They are isometric, and they satisfy the intertwining relation of §7.5, because $U_D(t-a)^{-1}U_D(t)\to e^{-iH_0a/\hbar}$ as $|t|\to\infty$ (the logarithms differ by a vanishing amount). Consequently $S_D=\Omega_D^{(-)\dagger}\Omega_D^{(+)}$ is unitary and commutes with $H_0$. Since the modification is a function of $H_0$ alone, on the energy shell it only multiplies the $S$ kernel by an energy-dependent phase. It leaves $|S_{\beta\alpha}|$, and hence the Rutherford cross section, unchanged, and in partial waves it appears as the Coulomb phases $\sigma_l=\arg\Gamma(l+1+i\eta)$. Smooth long-range tails more general than Coulomb are handled by the same idea, with further refinements (Hörmander) when the decay is very slow.

**Ultracold-atom interactions are short range.** Every interaction between neutral atoms, or between an atom and an ion, met in this vault decays faster than $1/r$:

| interaction | long-range form | $n$ |
|---|---|---|
| van der Waals (e.g. Ag + Ag) | $-C_6/r^6$ | 6 |
| atom–ion (induced dipole) | $-C_4/r^4$ | 4 |
| dipole–dipole (polar molecules, magnetic atoms) | $C_3(1-3\cos^2\theta)/r^3$ | 3 |
| Coulomb (ion–ion), for comparison | $\kappa/r$ | 1 |

All but the last satisfy the hypothesis of Proposition 7.4 with $n>1$, so the ordinary $\Omega^{(\pm)}$ exist, asymptotic completeness holds, and everything in §§1–7 applies without modification. The internal structure (hyperfine and Zeeman levels) enters through the internal part of $H_0$, and the couplings between internal states in $V$ decay with the same tails. The hard core and the short-range chemistry play no role in the existence question, since at late times the free packet is far away from them.

Being short range in Cook's sense is the weakest of the decay conditions met in later notes. The low-energy threshold laws of [[Scattering Theory 6 - Low-Energy Scattering, Effective Range, and Scattering Length|Scattering Theory 6]] need faster decay. For a tail $\propto r^{-n}$, the $s$-wave scattering length is finite only for $n>3$, and the effective-range expansion $k\cot\delta_0=-1/a+r_ek^2/2+\cdots$ holds to order $k^2$ only for $n>5$. The van der Waals interaction meets all three conditions. For the atom–ion interaction $k\cot\delta_0$ acquires a term linear in $k$. For the $1/r^3$ dipole–dipole tail the phase shifts of all partial waves $l\ge1$ scale as $k$ at low energy instead of $k^{2l+1}$, so all partial waves contribute. These conditions change how the table looks at low energy, not whether it exists.

For the proofs omitted or sketched here, see Reed and Simon, *Methods of Modern Mathematical Physics*, Vol. III (*Scattering Theory*), and Taylor, *Scattering Theory*. The original references are Cook (1957) for the criterion, Dollard (1964) for the Coulomb problem, and Agmon (1975) and Enss (1978) for asymptotic completeness.

---

## 8. Probabilities and rates

For continuum labels, $S_{\beta\alpha}$ is not an ordinary number but a distribution. Physical probabilities require wave packets or integration over finite final bins. After separating out the identity term and the energy-conserving delta function, the standard transition-rate expression is

$$
dW_{\alpha\to\beta}
=
\frac{2\pi}{\hbar}
|T_{\beta\alpha}(E_\alpha)|^2
\delta(E_\beta-E_\alpha)d\mu(\beta),
$$

where $d\mu(\beta)$ includes the appropriate sums over discrete final labels and integrations over continuous final labels.

This is the scattering version of Fermi's golden rule with the first-order interaction matrix element replaced by the exact transition matrix element. Cross sections are then obtained by dividing the appropriate final transition rate by the incoming flux of the prepared beam. The detailed expression for the flux depends on the representation and belongs naturally to the coordinate-space or partial-wave formulation.

---

## 9. Logical summary

The reference asymptotic basis is defined by the reference Hamiltonian,

$$
H_0|\alpha\rangle=E_\alpha|\alpha\rangle .
$$

Exact scattering is described by comparing true evolution with reference evolution at the initial and final ends,

$$
U_I(t_f,t_i)
=
e^{iH_0t_f/\hbar}
e^{-iH(t_f-t_i)/\hbar}
e^{-iH_0t_i/\hbar}.
$$

The scattering operator is the asymptotic limit of this comparison,

$$
S_{\beta\alpha}
=
\lim_{t_f\to+\infty,\;t_i\to-\infty}
\langle\beta|U_I(t_f,t_i)|\alpha\rangle .
$$

Time-translation invariance of the infinite-time collision gives energy conservation, and the reduced transition operator is defined by

$$
S_{\beta\alpha}
=
\delta(\beta-\alpha)
-
2\pi i\,\delta(E_\beta-E_\alpha)T_{\beta\alpha}(E_\alpha).
$$

The time-ordered construction yields the resolvent prescription

$$
G_0^{(+)}(E)=\frac{1}{E-H_0+i0}
$$

and the exact transition equation

$$
T(E)=V+VG_0^{(+)}(E)T(E).
$$

Equivalently, the stationary scattering vector satisfies

$$
|\psi_\alpha^{(+)}\rangle
=
|\alpha\rangle
+
G_0^{(+)}(E_\alpha)V|\psi_\alpha^{(+)}\rangle ,
$$

and the physical on-shell transition amplitude is

$$
T_{\beta\alpha}(E_\alpha)
=
\langle\beta|V|\psi_\alpha^{(+)}\rangle .
$$

The opposite boundary prescription gives

$$
|\psi_\beta^{(-)}\rangle
=
|\beta\rangle
+
G_0^{(-)}(E_\beta)V|\psi_\beta^{(-)}\rangle ,
$$

and on shell,

$$
T_{\beta\alpha}(E)
=
\langle\beta|V|\psi_\alpha^{(+)}\rangle
=
\langle\psi_\beta^{(-)}|V|\alpha\rangle .
$$

Finally, the Møller operators provide the invariant bridge between the time-dependent and stationary pictures,

$$
\Omega^{(+)}
=
\operatorname{s-}\lim_{t\to-\infty}
e^{iHt/\hbar}e^{-iH_0t/\hbar},
\qquad
\Omega^{(-)}
=
\operatorname{s-}\lim_{t\to+\infty}
e^{iHt/\hbar}e^{-iH_0t/\hbar},
$$

with

$$
S=\Omega^{(-)\dagger}\Omega^{(+)} .
$$

These limits are genuine, not formal. On the continuum, the Schrödinger evolution $e^{-iH(t_f-t_i)/\hbar}$ converges only weakly, to zero, and has no asymptotic limit. The interaction-picture operator, by contrast, factorizes exactly,

$$
U_I(t_f,t_i)=\Omega(t_f)^\dagger\,\Omega(t_i),
\qquad
\Omega(t)=e^{iHt/\hbar}e^{-iH_0t/\hbar},
$$

so the double limit splits into one strong limit at each end. Each end converges when Cook's integral $\int dt\,\|Ve^{-iH_0t/\hbar}g\|$ is finite, which in three dimensions holds for $|V|\le Cr^{-n}$ with $n>1$. The Møller operators are isometries that intertwine $H$ and $H_0$, so $[S,H_0]=0$. $S$ is unitary exactly when $\operatorname{Ran}\Omega^{(+)}=\operatorname{Ran}\Omega^{(-)}$, and asymptotic completeness, $\operatorname{Ran}\Omega^{(\pm)}=\mathcal H_{\rm ac}(H)$ with no singular continuous spectrum, holds for such potentials; bound states are orthogonal to both ranges. The Coulomb potential is long range and requires Dollard's modified free dynamics. The van der Waals, atom–ion, and dipole–dipole interactions of ultracold atoms ($r^{-6}$, $r^{-4}$, $r^{-3}$) are all short range in this sense.

This is the operator-level entrance to scattering theory. Coordinate-space outgoing waves, scattering amplitudes, partial waves, and differential cross sections are later representations of the same asymptotic structure.
