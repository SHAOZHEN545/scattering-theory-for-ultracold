## 0. What is being specialized

The previous scattering notes built the following hierarchy:

1. the abstract asymptotic input-output map $S$ and the transition operator $T(E)$;
2. channel-resolved coordinate and momentum representations $|\mathbf r,a\rangle$ and $|\mathbf k,a\rangle$;
3. channel-resolved scattering amplitudes $f_{ba}$ as far-field representatives of on-shell $T_{ba}$;
4. partial-wave blocks $S^l_{ba}(E)$;
5. the low-energy entrance-channel s-wave scattering length

$$
a_o(B)=-\lim_{k_o\to0}f^0_{oo}(E;B).
$$

This note does not introduce Feshbach resonance as a separate scattering theory. It specializes the same multichannel scattering theory to the case where an open-channel scattering state is coupled to one or more closed-channel bound states.

The central idea is:

$$
\boxed{
\text{a Feshbach resonance is a pole structure of the same multichannel }T\text{ matrix}
}
$$

When such a pole is tuned near the entrance-channel threshold, the zero-energy entrance-channel elastic s-wave amplitude becomes large. Since the scattering length is defined as the negative of that amplitude, the scattering length becomes resonant.

---

## 1. Open and closed channels at fixed total energy

Let the asymptotic channel label be $a$. As before, $a$ includes all non-spatial channel data: internal states, spin or hyperfine labels, arrangement labels, thresholds, reduced masses, and angular-momentum data when useful.

For a free asymptotic channel state,

$$
H_0|\mathbf k,a\rangle
=
\left(\epsilon_a+\frac{\hbar^2k^2}{2\mu_a}\right)|\mathbf k,a\rangle.
$$

At a fixed total energy $E$, channel $a$ is open if

$$
E>\epsilon_a.
$$

Then

$$
k_a(E)=\frac{\sqrt{2\mu_a(E-\epsilon_a)}}{\hbar}
$$

is real, and the channel can carry asymptotic incoming or outgoing flux.

Channel $c$ is closed if

$$
E<\epsilon_c.
$$

Then

$$
k_c=i\kappa_c,
\qquad
\kappa_c(E)=\frac{\sqrt{2\mu_c(\epsilon_c-E)}}{\hbar},
$$

and the large-distance channel component is evanescent rather than oscillatory:

$$
\psi_c(\mathbf r)\sim C_c(\hat{\mathbf r};E)\frac{e^{-\kappa_c r}}{r}.
$$

Thus a closed channel is not an asymptotic outgoing detector channel at that energy. However, it is still part of the internal coupled-channel dynamics.

>[!important]
>Open or closed is an asymptotic statement at fixed $E$. It says whether a channel can carry flux to infinity. It does not say whether that channel can occur virtually inside the collision region.

This is the conceptual doorway to Feshbach resonances. A closed channel need not be an outgoing channel to affect open-channel scattering. It can enter through intermediate propagation in the resolvent, and this virtual propagation can become resonantly enhanced when the closed-channel sector contains a bound state near the open-channel scattering energy.

---

## 2. Physical $S$ matrix versus internal channel components

At fixed $E$, the physical on-shell scattering matrix has asymptotic rows and columns only for open channels. In a partial-wave block, one writes schematically

$$
S^l(E)=\{S^l_{ba}(E)\}_{b,a\in\mathcal O(E)},
$$

where $\mathcal O(E)$ is the set of energetically open channels at energy $E$.

Closed channels do not appear as detector rows of this physical $S^l(E)$ block. Nevertheless, the exact scattering state prepared from an open entrance channel $o$ may have nonzero closed-channel components in the interaction region:

$$
|\psi_{\mathbf k_o o}^{(+)}\rangle
=
\sum_{a\in\mathcal O(E)}|\psi_a^{(+)}\rangle
+
\sum_{c\in\mathcal C(E)}|\psi_c^{(+)}\rangle.
$$

The closed components decay at large $r$, but the open components remember them through the coupled equations.

The same point appears in the channel-resolved transition equation:

$$
T(E)=V+VG_0^{(+)}(E)T(E).
$$

In channel representation, the intermediate sum includes denominators of the form

$$
\frac{1}{E-\epsilon_c-\hbar^2q^2/(2\mu_c)+i0}.
$$

For a closed channel $c$, this denominator has no real on-shell singularity in $q$, but it still contributes virtually. If the closed-channel Hamiltonian supports a near-threshold bound state, the virtual contribution can dominate the open-channel elastic amplitude.

---

## 3. The projection split

The Feshbach projection formalism makes the previous statement algebraic.

Choose complementary projectors

$$
P+Q=1,
\qquad
P^2=P,
\qquad
Q^2=Q,
\qquad
PQ=QP=0.
$$

The most common scattering choice is:

$$
P=\text{the retained open-channel sector},
\qquad
Q=\text{closed channels and any eliminated internal sectors}.
$$

For a purely elastic two-channel Feshbach model, $P$ is the entrance open channel and $Q$ is the closed channel containing the resonant bound state.

For a more general multichannel problem, there are two useful choices:

1. $P$ may contain all energetically open channels, while $Q$ contains closed channels.
2. $P$ may contain only the observed entrance elastic channel, while $Q$ contains closed channels plus unobserved open inelastic or reactive channels.

The first choice keeps the full open-channel $S$ matrix unitary. The second choice produces an effective optical model for a reduced elastic channel; then the reduced $P$-space dynamics can be non-Hermitian because probability can escape into open channels placed in $Q$.

>[!warning]
>The words $P$ and $Q$ are projection choices, not new physics. In the simplest Feshbach discussion, $P$ is open and $Q$ is closed, but the algebra also allows $Q$ to include omitted open loss channels.

---

## 4. Block decomposition of the Hamiltonian

Write the exact Hamiltonian in $P/Q$ block form:

$$
H=
\begin{pmatrix}
H_{PP} & H_{PQ}\\
H_{QP} & H_{QQ}
\end{pmatrix},
$$

where

$$
H_{PP}=PHP,
\qquad
H_{PQ}=PHQ,
\qquad
H_{QP}=QHP,
\qquad
H_{QQ}=QHQ.
$$

Let $|\Psi^{(+)}\rangle$ be a stationary outgoing scattering state at energy $E$:

$$
(E-H)|\Psi^{(+)}\rangle=0.
$$

Project it into

$$
|\Psi_P^{(+)}\rangle=P|\Psi^{(+)}\rangle,
\qquad
|\Psi_Q^{(+)}\rangle=Q|\Psi^{(+)}\rangle.
$$

The Schrödinger equation becomes the coupled pair

$$
(E-H_{PP})|\Psi_P^{(+)}\rangle
=
H_{PQ}|\Psi_Q^{(+)}\rangle,
$$

$$
(E-H_{QQ})|\Psi_Q^{(+)}\rangle
=
H_{QP}|\Psi_P^{(+)}\rangle.
$$

This is the abstract version of the coupled-channel equations. It is the same content as writing a multicomponent wave function and solving coupled radial equations, but it keeps the channel algebra transparent.

---

## 5. Eliminating $Q$: the energy-dependent effective Hamiltonian

Formally solve the $Q$-space equation:

$$
|\Psi_Q^{(+)}\rangle
=
G_Q^{(+)}(E)H_{QP}|\Psi_P^{(+)}\rangle,
$$

where

$$
G_Q^{(+)}(E)=\frac{1}{E-H_{QQ}+i0_Q}.
$$

The $+i0_Q$ records the relevant outgoing boundary condition if $Q$ contains continuum channels. If $Q$ contains only strictly closed bound-state degrees of freedom below their thresholds, it usually does not generate outgoing flux by itself, but the resolvent notation remains useful.

Substitute this result into the $P$-space equation:

$$
\left[E-H_{PP}-H_{PQ}G_Q^{(+)}(E)H_{QP}\right]|\Psi_P^{(+)}\rangle=0.
$$

Define the $Q$-space self-energy acting in $P$ space by

$$
\boxed{
\Sigma_Q^{(+)}(E)
=
H_{PQ}\frac{1}{E-H_{QQ}+i0_Q}H_{QP}
}
$$

and the effective $P$-space Hamiltonian by

$$
\boxed{
H_{\mathrm{eff}}^{(P)}(E)
=
H_{PP}+\Sigma_Q^{(+)}(E).
}
$$

Then the retained open-sector component obeys

$$
\boxed{
\left[E-H_{\mathrm{eff}}^{(P)}(E)\right]|\Psi_P^{(+)}\rangle=0.
}
$$

This is the formal origin of the Feshbach effective interaction.

The term

$$
\boxed{
H_{PQ}\frac{1}{E-H_{QQ}+i0_Q}H_{QP}
}
$$

has the following physical meaning:

$$
\text{open sector}
\longrightarrow
\text{virtual propagation in }Q
\longrightarrow
\text{return to open sector}.
$$

It is generally energy-dependent, nonlocal in coordinate representation, and not simply an ordinary potential curve. It is a self-energy: it shifts and dresses the open-channel dynamics through eliminated channels.

---

## 6. Effective resolvent and the location of poles

The projected exact resolvent is

$$
G_{PP}^{(+)}(E)
=
P\frac{1}{E-H+i0}P.
$$

Using the same block inversion gives

$$
\boxed{
G_{PP}^{(+)}(E)
=
\frac{1}{E-H_{PP}-\Sigma_Q^{(+)}(E)}.
}
$$

Poles of this projected resolvent are poles of open-channel scattering amplitudes, because the on-shell transition matrix may be written schematically as

$$
T(E)=V+VG^{(+)}(E)V,
$$

with

$$
G^{(+)}(E)=\frac{1}{E-H+i0}.
$$

Therefore, between open-channel scattering states,

$$
T_{ba}(E)
=
\langle \mathbf k_b,b|T(E)|\mathbf k_a,a\rangle
$$

inherits the pole structure of the exact resolvent.

In the channel normalization of the previous notes, the open-channel far-field amplitude is related to the on-shell transition matrix by

$$
f_{ba}(\mathbf k_b,\mathbf k_a;E)
=
-\frac{4\pi^2\mu_b}{\hbar^2}T_{ba}(\mathbf k_b,\mathbf k_a;E),
$$

with both external channels on shell. Thus a pole of $T_{ba}$ is also a pole of $f_{ba}$.

>[!important]
>Feshbach resonance is therefore not a new kind of scattering observable. It is a pole of the same channel-resolved $T$ matrix, seen most dramatically in an open-channel elastic matrix element.

---

## 7. Isolated closed-channel bound state

Now assume that $H_{QQ}$ has an isolated bound state $|\phi\rangle$ whose energy can be tuned close to the open-channel threshold:

$$
H_{QQ}|\phi\rangle=E_\phi(B)|\phi\rangle.
$$

Here $B$ denotes an external control parameter, usually a static magnetic field. Other closed-channel states may exist, but if they are far away in energy their contribution changes slowly and can be absorbed into background scattering.

Near the isolated state, the $Q$ resolvent has the spectral contribution

$$
G_Q(E)
\approx
\frac{|\phi\rangle\langle\phi|}{E-E_\phi(B)}
+
\text{slow background}.
$$

Therefore the $P$-space self-energy contains the nearly separable resonant term

$$
\Sigma_Q(E)
\approx
\frac{H_{PQ}|\phi\rangle\langle\phi|H_{QP}}{E-E_\phi(B)}
+
\text{slow background}.
$$

This expression already shows why the open-channel interaction can become large: if $E$ is close to $E_\phi(B)$, the virtual excursion into $Q$ lasts a long time and the effective open-channel interaction is enhanced.

However, this is still the bare closed-channel denominator. Once the state $|\phi\rangle$ is coupled to the open continuum, the pole position is shifted and broadened. It is often more transparent to dress the closed-channel state by eliminating $P$ instead.

Define the $P$-space outgoing resolvent

$$
G_P^{(+)}(E)=\frac{1}{E-H_{PP}+i0_P}.
$$

Then the dressed closed-channel propagator near $|\phi\rangle$ has denominator

$$
D(E;B)
=
E-E_\phi(B)-\langle\phi|H_{QP}G_P^{(+)}(E)H_{PQ}|\phi\rangle.
$$

Write

$$
\langle\phi|H_{QP}G_P^{(+)}(E)H_{PQ}|\phi\rangle
=
\Delta(E)-\frac{i}{2}\Gamma(E)
$$

when the open-channel continuum gives an imaginary part. Then

$$
\boxed{
D(E;B)=E-E_\phi(B)-\Delta(E)+\frac{i}{2}\Gamma(E).
}
$$

The pole is determined by

$$
D(E_{\mathrm{pole}};B)=0.
$$

Below threshold, the pole may lie on the physical sheet and represent a true bound state. Above threshold, after analytic continuation to the appropriate unphysical sheet, it represents a resonance with

$$
E_{\mathrm{pole}}
\approx
E_{\mathrm r}-\frac{i}{2}\Gamma.
$$

---

## 8. Resonant part of the open-channel $T$ matrix

Let $|\chi_a^{(+)}(E)\rangle$ denote a background distorted scattering state in the retained open sector. In the simplest case, it is the scattering state generated by $H_{PP}$ before the near-resonant closed-channel state is included.

Define the coupling amplitude from open channel $a$ to the resonant state by

$$
\gamma_a(E)
=
\langle\phi|H_{QP}|\chi_a^{(+)}(E)\rangle.
$$

Then the resonant part of the open-channel transition matrix has the generic form

$$
\boxed{
T_{ba}^{\mathrm{res}}(E;B)
\sim
\frac{\gamma_b^*(E)\gamma_a(E)}
{E-E_\phi(B)-\Delta(E)+i\Gamma(E)/2}.
}
$$

More precisely, the numerator depends on normalization conventions and on whether the external states are free or background-distorted states. The structural content is independent of these details:

$$
\text{background amplitude}
+
\frac{\text{coupling into the resonant state}\times\text{coupling back out}}
{\text{detuning from the dressed pole}}.
$$

For the entrance-channel elastic element $o\to o$,

$$
T_{oo}(E;B)
=
T_{oo}^{\mathrm{bg}}(E)
+
T_{oo}^{\mathrm{res}}(E;B),
$$

with

$$
T_{oo}^{\mathrm{res}}(E;B)
\sim
\frac{|\gamma_o(E)|^2}
{E-E_\phi(B)-\Delta(E)+i\Gamma(E)/2}.
$$

This is the channel-resolved $T$-matrix version of the familiar resonant denominator.

---

## 9. Magnetic tuning and the shifted resonance position

In magnetic Feshbach resonances, the entrance-channel threshold and the closed-channel bound state usually have different magnetic moments. If the entrance threshold is chosen as the zero of energy, one writes the bare closed-channel energy approximately as

$$
E_\phi(B)=\delta\mu(B-B_{\mathrm{bare}}),
$$

where $\delta\mu$ is the relative magnetic moment between the closed-channel molecular state and the open-channel threshold.

The resonance is not located where the bare state crosses threshold. It is located where the dressed state crosses threshold.

At low energy define

$$
\Delta_0=\Delta(E=0).
$$

Then the dressed detuning from threshold is

$$
\nu(B)=E_\phi(B)+\Delta_0.
$$

The resonant magnetic field $B_0$ is defined by

$$
\boxed{
\nu(B_0)=0.
}
$$

Equivalently,

$$
\nu(B)=\delta\mu(B-B_0)
$$

near the resonance.

This is exactly the shift emphasized by Cohen-Tannoudji: the resonance is controlled by the shifted closed-channel level, not by the bare level.

---

## 10. Low-energy s wave and the scattering length

Now specialize the observed entrance channel to an open s-wave channel $o$ whose threshold defines the collision energy:

$$
E=\epsilon_o+\frac{\hbar^2k_o^2}{2\mu_o}.
$$

The entrance-channel elastic s-wave amplitude is

$$
f^0_{oo}(E;B)
=
-\frac{4\pi^2\mu_o}{\hbar^2}T^0_{oo}(E;B),
$$

in the continuum normalization used in the previous notes.

The scattering length is

$$
\boxed{
a_o(B)
=
-\lim_{k_o\to0}f^0_{oo}(E;B).
}
$$

This is the same definition as before. Feshbach resonance changes the mechanism that makes $f^0_{oo}(0;B)$ large; it does not change what the scattering length is.

Near an isolated resonance, the low-energy elastic amplitude has the schematic form

$$
f^0_{oo}(E;B)
=
f_{\mathrm{bg}}^0(E)
+
\frac{A(E)}{E-\nu(B)+i\Gamma(E)/2},
$$

where $A(E)$ contains the coupling into and out of the resonant state, including external-state normalization factors.

For an elastic s-wave entrance continuum, the elastic width obeys the threshold law

$$
\Gamma_o(E)\propto k_o
\qquad
(k_o\to0).
$$

Thus the resonance can be extremely sharp in energy at ultralow collision energy. In the zero-energy scattering length, the relevant denominator is controlled by the threshold detuning $\nu(B)$:

$$
f^0_{oo}(0;B)
\approx
-a_{\mathrm{bg}}
+
\frac{\text{constant}}{-\nu(B)}.
$$

Therefore

$$
a_o(B)
\approx
a_{\mathrm{bg}}
+
\frac{C}{\nu(B)},
$$

The constant $C$ includes the sign of the coupling convention. Since $\nu(B)=\delta\mu(B-B_0)$, this can be written in the familiar resonant form

$$
\boxed{
a_o(B)=a_{\mathrm{bg}}\left(1-\frac{\Delta_B}{B-B_0}\right).
}
$$

Here $a_{\mathrm{bg}}$ is the background entrance-channel scattering length and $\Delta_B$ is the magnetic-field width parameter. The sign and magnitude of $\Delta_B$ depend on the coupling matrix element, the relative magnetic moment, and the sign convention for $B-B_0$.

>[!summary]
>The scattering length diverges because the inverse zero-energy elastic s-wave amplitude passes through zero when the dressed closed-channel pole is tuned to the open-channel threshold.

---

## 11. Relation to the low-energy phase-shift form

If the entrance channel is the only energetically open channel and the dynamics is lossless, the elastic s-wave block is one-dimensional and unitary:

$$
S^0_{oo}(k;B)=e^{2i\delta_0(k;B)}.
$$

Then

$$
f^0_{oo}(k;B)
=
\frac{1}{k\cot\delta_0(k;B)-ik}.
$$

The scattering length satisfies

$$
\lim_{k\to0}k\cot\delta_0(k;B)=-\frac{1}{a_o(B)}.
$$

A Feshbach resonance makes $a_o(B)$ large by making $k\cot\delta_0(k;B)$ small near $k=0$. In this special one-open-channel setting, the same phenomenon can be described as a rapid resonant variation of a phase shift.

But the phase-shift description is not the fundamental one. The more general statement is that the open-channel $T$-matrix element has a pole-like contribution produced by a dressed closed-channel state.

---

## 12. Why a closed channel can dominate an open-channel observable

It may seem paradoxical that a channel which cannot appear as an outgoing asymptotic channel can dominate an open-channel cross section or scattering length. The resolution is that the closed channel is not detected at infinity; it is visited virtually during the collision.

In time-independent language, the virtual visit is encoded in

$$
H_{PQ}\frac{1}{E-H_{QQ}}H_{QP}.
$$

In time-domain language, a small energy mismatch allows the intermediate component to persist for a long time. Schematically,

$$
\Delta t\sim\frac{\hbar}{|E-E_\phi|}.
$$

When the closed-channel bound state is far from the open-channel scattering energy, the virtual excursion is short and gives only a small correction to background scattering. When the bound state is tuned near threshold, the virtual excursion is resonantly enhanced and strongly modifies $S^0_{oo}(E;B)$.

Thus the closed channel affects the open-channel scattering without ever becoming an asymptotic outgoing channel.

---

## 13. The Cohen-Tannoudji two-channel model as a specialization

Only now do we reduce to the two-channel model used by Cohen-Tannoudji.

The state is written as a two-component vector

$$
|\Psi\rangle
=
\begin{pmatrix}
|\varphi_{\mathrm{op}}\rangle\\
|\varphi_{\mathrm{cl}}\rangle
\end{pmatrix}.
$$

The Hamiltonian is

$$
H_2=
\begin{pmatrix}
H_{\mathrm{op}} & W\\
W & H_{\mathrm{cl}}
\end{pmatrix},
$$

with

$$
H_{\mathrm{op}}=T+V_{\mathrm{op}},
\qquad
H_{\mathrm{cl}}=T+V_{\mathrm{cl}}.
$$

The coupling $W$ connects the open and closed channels. In the single-resonance approximation,

$$
H_{\mathrm{cl}}
\approx
E_{\mathrm{res}}(B)|\varphi_{\mathrm{res}}\rangle\langle\varphi_{\mathrm{res}}|.
$$

This is the specific model behind the generic projection notation:

$$
P\leftrightarrow \text{open channel},
\qquad
Q\leftrightarrow \text{closed resonant state}.
$$

The two coupled equations are

$$
H_{\mathrm{op}}|\varphi_{\mathrm{op}}\rangle
+W|\varphi_{\mathrm{cl}}\rangle
=E|\varphi_{\mathrm{op}}\rangle,
$$

$$
W|\varphi_{\mathrm{op}}\rangle
+H_{\mathrm{cl}}|\varphi_{\mathrm{cl}}\rangle
=E|\varphi_{\mathrm{cl}}\rangle.
$$

Eliminating the closed component gives

$$
|\varphi_{\mathrm{cl}}\rangle
=
\frac{|\varphi_{\mathrm{res}}\rangle\langle\varphi_{\mathrm{res}}|W|\varphi_{\mathrm{op}}\rangle}{E-E_{\mathrm{res}}(B)}.
$$

Substitution into the open-channel equation yields the effective open-channel operator

$$
H_{\mathrm{op}}
+
W\frac{|\varphi_{\mathrm{res}}\rangle\langle\varphi_{\mathrm{res}}|}{E-E_{\mathrm{res}}(B)}W.
$$

This is the direct two-channel version of

$$
H_{PP}+H_{PQ}\frac{1}{E-H_{QQ}}H_{QP}.
$$

However, the open-channel continuum also dresses the closed-channel state. Resumming repeated open-channel propagation gives the Cohen-Tannoudji effective interaction

$$
V_{\mathrm{eff}}(E)
=
W
\frac{|\varphi_{\mathrm{res}}\rangle\langle\varphi_{\mathrm{res}}|}
{E-E_{\mathrm{res}}(B)-\langle\varphi_{\mathrm{res}}|WG_{\mathrm{op}}^{(+)}(E)W|\varphi_{\mathrm{res}}\rangle}
W,
$$

where

$$
G_{\mathrm{op}}^{(+)}(E)=\frac{1}{E-H_{\mathrm{op}}+i0}.
$$

This denominator has exactly the general dressed-pole structure

$$
E-E_\phi(B)-\Delta(E)+i\Gamma(E)/2.
$$

At threshold Cohen-Tannoudji writes the real shift as

$$
\langle\varphi_{\mathrm{res}}|WG_{\mathrm{op}}^{(+)}(0)W|\varphi_{\mathrm{res}}\rangle
=
\hbar\Delta_0.
$$

Thus the shifted closed-channel energy is

$$
\widetilde E_{\mathrm{res}}(B)
=
E_{\mathrm{res}}(B)+\hbar\Delta_0.
$$

If

$$
E_{\mathrm{res}}(B)=\xi(B-B_{\mathrm{res}}),
$$

then the physical resonance field $B_0$ is defined by

$$
\widetilde E_{\mathrm{res}}(B)=\xi(B-B_0).
$$

The resonance occurs at $B_0$, not at the bare crossing $B_{\mathrm{res}}$.

Finally, taking the $k\to0$ asymptotic form of the open-channel component gives

$$
\boxed{
a(B)=a_{\mathrm{bg}}\left(1-\frac{\Delta B}{B-B_0}\right).
}
$$

In Cohen-Tannoudji's normalization,

$$
\Delta B
=
\frac{2\mu}{\hbar^2}2\pi^2
\frac{|\langle\varphi_{\mathbf 0}^{+}|W|\varphi_{\mathrm{res}}\rangle|^2}
{\xi a_{\mathrm{bg}}}.
$$

This formula is not the starting point of Feshbach theory. It is the zero-energy, single-open-channel, single-closed-bound-state reduction of the general multichannel pole structure.

---

## 14. Background scattering versus resonant scattering

The open-channel elastic amplitude naturally separates into a slowly varying background part and a rapidly varying resonant part:

$$
f^0_{oo}(E;B)
=
f^0_{\mathrm{bg}}(E)
+
f^0_{\mathrm{res}}(E;B).
$$

The background part comes from direct open-channel scattering, represented in Cohen-Tannoudji by $V_{\mathrm{op}}$ and in the projection notation by the $P$-space dynamics before the near-resonant $Q$ state is isolated.

The resonant part comes from the loop

$$
o
\longrightarrow
\phi_{\mathrm{closed}}
\longrightarrow
o.
$$

Near threshold,

$$
f^0_{\mathrm{bg}}(0)=-a_{\mathrm{bg}},
$$

while

$$
f^0_{\mathrm{res}}(0;B)
\propto
\frac{1}{B-B_0}.
$$

Therefore the scattering length has a background value far from resonance and a pole-like variation near resonance.

The zero crossing occurs when

$$
a(B)=0,
$$

which in the standard parameterization gives

$$
B-B_0=\Delta B.
$$

At that field the leading zero-energy s-wave elastic amplitude vanishes even though the microscopic interactions have not disappeared.

---

## 15. Finite collision energy and the unitarity limit

The divergence of $a(B)$ is a zero-energy statement. At finite $k$, the s-wave elastic amplitude contains the unitarity term $-ik$:

$$
f_0(k;B)
\simeq
\frac{1}{-1/a(B)-ik}
$$

when effective-range corrections are neglected.

The elastic cross section is then

$$
\sigma_{\mathrm{el}}(k;B)
=
4\pi |f_0(k;B)|^2
\simeq
\frac{4\pi a(B)^2}{1+k^2a(B)^2}
$$

for real $a(B)$.

Thus even when $|a(B)|\to\infty$, the finite-energy cross section saturates at

$$
\sigma_{\mathrm{el}}(k;B)\to\frac{4\pi}{k^2}.
$$

The pole in the scattering length should therefore not be confused with an infinite finite-energy cross section. It is the zero-energy limit of the elastic amplitude that diverges.

---

## 16. Hutson's lesson: inelastic channels can suppress scattering-length poles

The ideal formula

$$
a(B)=a_{\mathrm{bg}}\left(1-\frac{\Delta_B}{B-B_0}\right)
$$

assumes, in effect, that the resonant state couples dominantly back to the entrance elastic channel and that there is no important inelastic loss channel at the same energy.

Hutson's analysis emphasizes what changes when additional open channels are available. Suppose the resonant state couples both to the entrance channel $0$ and to inelastic channels $i$. The full open-channel $S$ matrix is still unitary when all open channels are retained, but the observed elastic element $S_{00}$ need not have unit modulus.

The dressed resonance denominator then contains a total width

$$
\Gamma(E)=\Gamma_0(E)+\Gamma_{\mathrm{inel}}(E).
$$

For an ultracold entrance s wave,

$$
\Gamma_0(E)\propto k_0,
$$

but exoergic inelastic widths need not vanish with the entrance-channel wave number in the same way. Therefore, at very small $k_0$, the resonance may be dominated by loss into other open channels rather than by elastic return to the entrance channel.

In that case $S_{00}$ does not trace the full unit circle associated with a purely elastic one-channel resonance. It traces a smaller circle in the complex plane. Since the scattering length pole in the single-channel picture corresponds to $S_{00}=-1$, a smaller circle may never pass through $-1$.

A low-energy form quoted by Hutson for the complex scattering length is

$$
a(B)
=
a_{\mathrm{bg}}
+
\frac{a_{\mathrm{res}}}
{2(B-B_{\mathrm{res}})/\Gamma_B^{\mathrm{inel}}+i}.
$$

Here $a_{\mathrm{res}}$ measures the size of the scattering-length oscillation. If the resonant state couples comparably to elastic and inelastic channels, $a_{\mathrm{res}}$ can be modest and the pole-like divergence is suppressed. If coupling to inelastic channels is much weaker than coupling back to the entrance channel, the ordinary two-channel picture is recovered to a good approximation.

>[!important]
>The pole is a property of the full multichannel analytic structure. A pole-like divergence in the observed elastic scattering length is an additional low-energy consequence that can be suppressed when the resonant state has strong decay routes into other open channels.

This is why the two-channel model is a powerful baseline but not the whole story for ultracold molecular collisions, where many inelastic or reactive channels may be present.

---

## 17. Bound-state side and the near-threshold molecular state

When the dressed pole crosses below the entrance-channel threshold, it becomes a true bound state of the full coupled-channel Hamiltonian. In the simplest lossless s-wave case, a large positive scattering length corresponds to a shallow bound state with

$$
E_b\simeq -\frac{\hbar^2}{2\mu a(B)^2}.
$$

Its long-range wave function behaves as

$$
\psi_b(r)\propto\frac{e^{-r/a}}{r}
$$

outside the interaction range when $a\gg R$.

This is the bound-state counterpart of the resonant scattering length. Near resonance, the bound state can become open-channel dominated and spatially large, even though the bare resonant state was originally a closed-channel bound state. Cohen-Tannoudji emphasizes this as the origin of halo-like Feshbach dimers.

This section is not needed to define the scattering length resonance, but it is the same pole viewed on the bound-state side of threshold.

---

## 18. Logical summary

At fixed total energy:

$$
\text{open channel}
\quad\Longleftrightarrow\quad
E>\epsilon_a,
\qquad
\text{closed channel}
\quad\Longleftrightarrow\quad
E<\epsilon_a.
$$

Only open channels appear as asymptotic rows and columns of the physical $S$ matrix. Closed channels do not carry outgoing flux to infinity, but they enter virtually through the resolvent.

The projection split gives

$$
H=
\begin{pmatrix}
H_{PP} & H_{PQ}\\
H_{QP} & H_{QQ}
\end{pmatrix}
$$

and elimination of $Q$ gives

$$
H_{\mathrm{eff}}^{(P)}(E)
=
H_{PP}
+
H_{PQ}\frac{1}{E-H_{QQ}+i0}H_{QP}.
$$

If $H_{QQ}$ contains a bound state $|\phi\rangle$ near the open-channel threshold, the open-channel transition matrix acquires a resonant contribution

$$
T_{ba}^{\mathrm{res}}(E;B)
\sim
\frac{\gamma_b^*(E)\gamma_a(E)}
{E-E_\phi(B)-\Delta(E)+i\Gamma(E)/2}.
$$

For the entrance elastic s-wave amplitude,

$$
f^0_{oo}(E;B)
=
-\frac{4\pi^2\mu_o}{\hbar^2}T^0_{oo}(E;B),
$$

and the scattering length is

$$
a_o(B)=-\lim_{k_o\to0}f^0_{oo}(E;B).
$$

When the dressed closed-channel pole is tuned through the open-channel threshold,

$$
\nu(B)=E_\phi(B)+\Delta(0)=\delta\mu(B-B_0)
$$

passes through zero, and the zero-energy amplitude becomes resonant:

$$
a_o(B)=a_{\mathrm{bg}}\left(1-\frac{\Delta_B}{B-B_0}\right)
$$

in the ideal lossless two-channel s-wave limit.

Thus:

$$
\boxed{
\text{Feshbach resonance is the near-threshold pole of the multichannel }T\text{ matrix,}
}
$$

and

$$
\boxed{
\text{the resonant scattering length is its zero-energy entrance-channel elastic s-wave limit.}
}
$$

---

## 19. Source map for this note

- **Scattering Theory I** supplies the abstract $S$ and $T$ operators, the asymptotic input-output viewpoint, and the relation $S=1-2\pi i\delta(E_f-E_i)T$.
- **Scattering Theory II** supplies the channel-resolved Hilbert space, thresholds, and the distinction between open and closed channels.
- **Scattering Theory III** supplies the relation between the on-shell transition matrix and the far-field channel amplitude $f_{ba}$.
- **Scattering Theory V** supplies the partial-wave block viewpoint and the statement that closed channels affect open-channel blocks through virtual propagation.
- **Scattering Theory VI** supplies the entrance-channel definition of the multichannel scattering length $a_o=-\lim_{k_o\to0}f^0_{oo}$.
- **Cohen-Tannoudji, Chapter 16** supplies the concrete two-channel open/closed model, the effective interaction $V_{\mathrm{eff}}$, the shifted resonant field $B_0$, and the formula $a(B)=a_{\mathrm{bg}}(1-\Delta B/(B-B_0))$.
- **Hutson, NJP 9, 152 (2007)** supplies the important qualification that inelastic channels can suppress pole-like behavior in the observed elastic scattering length, even though the full multichannel resonance structure remains.
