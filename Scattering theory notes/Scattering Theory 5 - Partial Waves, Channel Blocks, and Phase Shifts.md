The previous notes developed scattering in a channel-resolved form. The central object was the asymptotic input-output operator $S$, with matrix elements between channel momentum states such as

$$
S_{ba}(\mathbf k_b,\mathbf k_a)
=
\langle \mathbf k_b,b|S|\mathbf k_a,a\rangle.
$$

The channel-resolved scattering amplitude $f_{ba}$ was then identified as the coefficient of the outgoing spherical wave in open final channel $b$, and the cross section was obtained from the outgoing rate divided by the incoming flux.

This note now introduces partial waves. The goal is to follow Sakurai's logic, but without making the phase shift more fundamental than it really is. In the one-channel elastic problem, each partial wave is described by a number

$$
S_l=e^{2i\delta_l}.
$$

In a multichannel problem, the same partial-wave sector is described instead by a matrix

$$
S^J_{ba}(E)
\quad \text{or, in spinless notation,} \quad
S^l_{ba}(E).
$$

The phase shift is therefore a special one-channel parameterization of a unitary partial-wave block. The partial-wave $S$ matrix is the more fundamental object.

---

## 1. Why angular momentum block-diagonalizes scattering

Suppose the reference dynamics and the full dynamics are rotationally invariant. In the simplest spinless case this means

$$
[H_0,\mathbf L]=0,
\qquad
[H,\mathbf L]=0,
$$

or equivalently

$$
[H_0,L^2]=[H_0,L_z]=0,
\qquad
[H,L^2]=[H,L_z]=0.
$$

Since the Møller operators compare the exact and free dynamics asymptotically,

$$
\Omega^{(+)}
=
\operatorname{s-}\lim_{t\to -\infty}
e^{iHt/\hbar}e^{-iH_0t/\hbar},
\qquad
\Omega^{(-)}
=
\operatorname{s-}\lim_{t\to +\infty}
e^{iHt/\hbar}e^{-iH_0t/\hbar},
$$

the same rotational symmetry implies that they commute with rotations. Therefore

$$
S=\Omega^{(-)\dagger}\Omega^{(+)}
$$

also commutes with rotations:

$$
[S,\mathbf L]=0
$$

in the spinless case. Since the transition operator $T(E)$ is extracted from the nontrivial part of $S$, the on-shell $T$ matrix inherits the same angular-momentum selection rules.

This is the conceptual reason partial waves work. Rotational symmetry says that scattering cannot mix inequivalent irreducible representations of the rotation group. In spinless three-dimensional scattering, those irreducible sectors are labeled by $l$ and have magnetic sublevels $m=-l,\ldots,l$. The $S$ matrix is therefore block diagonal in $l$, and rotational invariance also makes it independent of $m$ inside a given $l$ block.

For a central single-channel potential, each block is one-dimensional after fixing $l$ and $m$, so it is described by one complex number $S_l(E)$. For a multichannel central interaction, each block still has fixed angular momentum, but it may have several open channel labels. The corresponding block is then a matrix acting on the open-channel indices.

---

## 2. Partial-wave channel basis

The earlier channel basis used states of the form

$$
|\mathbf k,a\rangle,
$$

where $a$ denotes the non-spatial asymptotic channel data: internal states, thresholds, reduced masses, arrangement labels, and so on. To adapt this to rotations, separate the magnitude and direction of the relative momentum and expand the angular dependence in spherical harmonics.

For spinless channels, define partial-wave channel states schematically by

$$
|k,l,m,a\rangle
=
\int d\Omega_{\hat{\mathbf k}}\,
Y_{lm}(\hat{\mathbf k})
|\mathbf k,a\rangle,
\qquad
\mathbf k=k\hat{\mathbf k},
$$

up to the chosen continuum-normalization convention. Equivalently, one may use energy-normalized states

$$
|E,l,m,a\rangle,
\qquad
E=\epsilon_a+\frac{\hbar^2k_a^2}{2\mu_a}.
$$

At fixed total energy $E$, the open-channel momentum in channel $a$ is

$$
k_a(E)=\frac{\sqrt{2\mu_a(E-\epsilon_a)}}{\hbar},
\qquad
E>\epsilon_a.
$$

Thus the on-shell partial-wave basis at energy $E$ may be viewed as

$$
|E,l,m,a\rangle_{	ext{open}},
$$

where $a$ ranges only over asymptotically open channels when one is describing the external $S$ matrix. Closed channels do not appear as outgoing detector channels, but they can still enter the internal dynamics through $G_0^{(+)}(E)$ and therefore affect the open-channel block.

In problems with spin, the better basis is not $|k,l,m,a\rangle$ but a coupled angular-momentum basis. For example, if the channel has total spin $s_a$, one couples orbital and spin angular momenta:

$$
|k,(l s_a)J M,a\rangle
=
\sum_{m_l m_s}
\langle l m_l,s_a m_s|J M\rangle
|k,l,m_l\rangle|s_a,m_s,a\rangle.
$$

Then rotational symmetry block-diagonalizes $S$ by total angular momentum $J$ and its projection $M$. If parity and other discrete symmetries are conserved, the blocks can be further decomposed. To keep the formulas readable, most of this note uses spinless notation and writes $l$ instead of $J$.

---

## 3. The partial-wave $S$ matrix in spinless multichannel notation

In the spinless channel partial-wave basis, rotational invariance gives

$$
\langle E',l',m',b|S|E,l,m,a\rangle
=
\delta(E'-E)\delta_{l'l}\delta_{m'm}S^l_{ba}(E),
$$

again up to the usual continuum normalization of the energy delta function. The important structure is the index pattern:

$$
S
\quad \longrightarrow \quad
S^l(E)=\{S^l_{ba}(E)\}_{b,a\in \text{open channels}}.
$$

For each fixed $l$ and $E$, $S^l(E)$ is a matrix in open-channel space. The incoming channel index is $a$, and the outgoing channel index is $b$.

Similarly, the partial-wave transition matrix has the form

$$
\langle E',l',m',b|T(E)|E,l,m,a\rangle
\propto
\delta_{l'l}\delta_{m'm}T^l_{ba}(E),
$$

with the proportionality depending on whether one uses energy-normalized or momentum-normalized partial-wave states. Conceptually, however, the relation is the same as before:

$$
S
=
1
-
2\pi i\,\delta(E_f-E_i)T,
$$

now decomposed into angular-momentum blocks.

Thus partial waves do not introduce a new scattering object. They reorganize the same $S$ matrix and the same $T$ matrix into symmetry-adapted blocks.

---

## 4. Single-channel elastic scattering as a one-dimensional block

Now specialize to one open channel and a central, spinless potential. At fixed $l$, there is no remaining channel index. The partial-wave block is a single complex number:

$$
S^l(E)\equiv S_l(E).
$$

Elastic probability conservation says that the full $S$ matrix is unitary. Since angular momentum blocks do not mix, each one-dimensional block must itself be unitary:

$$
|S_l(E)|=1.
$$

Therefore it can be written as a pure phase:

$$
S_l(E)=e^{2i\delta_l(E)},
$$

where $\delta_l(E)$ is real. This is the phase shift.

The factor of $2$ is conventional but natural. A radial standing wave outside the range of the potential may be written as a superposition of incoming and outgoing spherical waves. The potential changes the relative phase between the outgoing and incoming pieces. Since the regular free solution already contains both incoming and outgoing parts, the asymptotic radial wave is shifted by $\delta_l$, while the ratio of outgoing to incoming wave coefficients is shifted by $e^{2i\delta_l}$.

>[!danger] what the fuck is this

Thus the phase shift is not a new fundamental dynamical object. It is the angle that parameterizes a one-dimensional unitary partial-wave $S$ matrix.

---

## 5. Deriving the usual single-channel partial-wave amplitude

Take the incident momentum along the $z$ axis. The plane wave expansion is

$$
e^{ikz}
=
\sum_{l=0}^{\infty}(2l+1)i^l j_l(kr)P_l(\cos\theta).
$$

At large $r$,

$$
j_l(kr)
\sim
\frac{1}{2ikr}
\left[
e^{i(kr-l\pi/2)}
-
e^{-i(kr-l\pi/2)}
\right].
$$

Using $i^l=e^{il\pi/2}$, the incident plane wave can be written asymptotically as a sum of incoming and outgoing spherical radial pieces:

$$
e^{ikz}
\sim
\sum_{l=0}^{\infty}(2l+1)P_l(\cos\theta)
\frac{1}{2ikr}
\left[
e^{ikr}
-
(-1)^l e^{-ikr}
\right].
$$
>[!danger] why is there a $\sim$ symbol here? What is not rigorous?

The scattering solution has the large-distance form

$$
\psi^{(+)}_{\mathbf k}(\mathbf r)
\sim
\frac{1}{(2\pi)^{3/2}}
\left[
e^{ikz}+f(\theta)\frac{e^{ikr}}{r}
\right].
$$

Expand the amplitude in Legendre polynomials:

$$
f(\theta)
=
\sum_{l=0}^{\infty}(2l+1)f_l(k)P_l(\cos\theta).
$$

Then the coefficient of the outgoing wave in the $l$th partial wave changes from its incident value to

$$
1
\quad \longrightarrow \quad
1+2ik f_l(k).
$$

The incoming coefficient is fixed by the incoming boundary condition. Therefore the partial-wave $S$ matrix is

$$
S_l(k)
=
1+2ik f_l(k).
$$
>[!danger] how to see this?

Solving for $f_l$ gives

$$
f_l(k)
=
\frac{S_l(k)-1}{2ik}.
$$

In the one-channel elastic case, $S_l=e^{2i\delta_l}$, so

$$
f_l(k)
=
\frac{e^{2i\delta_l}-1}{2ik}
=
\frac{e^{i\delta_l}\sin\delta_l}{k}
=
\frac{1}{k\cot\delta_l-ik}.
$$

Thus the usual partial-wave amplitude is

$$
\boxed{
f(\theta)
=
\frac{1}{2ik}
\sum_{l=0}^{\infty}(2l+1)
\left(e^{2i\delta_l}-1\right)
P_l(\cos\theta)
}
$$

or equivalently

$$
\boxed{
f(\theta)
=
\sum_{l=0}^{\infty}(2l+1)
\frac{e^{i\delta_l}\sin\delta_l}{k}
P_l(\cos\theta)
}.
$$

This is Sakurai's single-channel formula. In the present notation it is the special case of a one-dimensional unitary $S$-matrix block in each $l$ sector.

---

## 6. Multichannel partial waves

Return now to several asymptotic channels. For fixed energy $E$ and fixed $l$, the open-channel partial-wave $S$ matrix is

$$
S^l(E)
=
\begin{pmatrix}
S^l_{11}(E) & S^l_{12}(E) & \cdots \\
S^l_{21}(E) & S^l_{22}(E) & \cdots \\
\vdots & \vdots & \ddots
\end{pmatrix},
$$

where the rows label outgoing open channels and the columns label incoming open channels.

>[!danger] wait a minute where's the spin

Unitarity of the full $S$ matrix implies, within each independent partial-wave block,

$$
S^l(E)^\dagger S^l(E)=1
$$

provided the block includes all open channels at that energy. In components,

$$
\sum_b S^{l*}_{ba}(E)S^l_{bc}(E)=\delta_{ac}.
$$

This equation says that all probability entering the $l$th block in channel $a$ must leave through the open channels included in the block. Some outgoing probability may remain in the same channel, and some may emerge in other open channels.

The one-channel statement

$$
S_l=e^{2i\delta_l}
$$

is replaced by the matrix statement

$$
S^l \in U(N_l),
$$

where $N_l$ is the number of open channels in that partial-wave sector. A single real phase shift is no longer enough to describe the scattering.

---

## 7. Eigenphase shifts

Any unitary matrix can be diagonalized by a unitary change of basis. If time-reversal symmetry and other assumptions make the physical $S^l$ symmetric, one often uses a related real orthogonal mixing matrix; but the general idea is already clear from ordinary unitary diagonalization.

Write

$$
S^l(E)
=
U^l(E)
\exp\!
\left[2i\Delta^l(E)\right]
U^l(E)^\dagger,
$$

where

$$
\Delta^l(E)
=
\operatorname{diag}
\left(\delta^l_1(E),\delta^l_2(E),\ldots,\delta^l_{N_l}(E)\right).
$$

The numbers $\delta^l_\nu(E)$ are eigenphase shifts. They are phase shifts of **eigenchannels**, not necessarily of the original physical channels $a,b$. The matrix $U^l(E)$ tells how the physical channel basis is mixed to form the eigenchannel basis.

Thus multichannel scattering does not destroy the phase-shift idea. It relocates it. The phases belong naturally to eigenvalues of the partial-wave $S$ matrix, while the physical channel-to-channel amplitudes are controlled by both the eigenphases and the mixing matrix.

---

## 8. Inelasticity and reduced elastic blocks

There are two closely related uses of the word inelasticity.

First, if several open channels are included explicitly, the full open-channel block $S^l$ is still unitary. Transitions from $a$ to $b\ne a$ are inelastic in the physical sense, but they are not a loss of probability from the full open-channel block. They are off-diagonal matrix elements of a unitary matrix.

Second, if one looks only at a single elastic channel $a$ while other open channels are also available, the elastic element $S^l_{aa}$ need not have unit modulus. One often writes

$$
S^l_{aa}(E)
=
\eta^l_a(E)e^{2i\delta^l_a(E)},
\qquad
0\leq \eta^l_a(E)\leq 1.
$$

Here $\eta^l_a$ is an inelasticity parameter for the observed elastic channel. It is not saying that the full $S^l$ block is nonunitary. It says that after projecting attention down to one entrance-exit channel, some probability has gone into other open channels:

$$
|S^l_{aa}|^2
+
\sum_{b\ne a}|S^l_{ba}|^2
=
1.
$$
>[!danger] Two questions
>1. Why is this equation representing conservation of probabilities
>2. How to define enelasticity

In a genuinely absorptive effective model, where some eliminated channels are not retained in the Hilbert space, the reduced $S$ matrix may be subunitary. But in a complete open-channel description, unitarity is restored by including all open final channels.

---

## 9. Partial-wave amplitudes in a multichannel basis

The single-channel relation

$$
f_l(k)=\frac{S_l(k)-1}{2ik}
$$

has a direct matrix analogue, but one must be careful with channel velocities and normalizations. A convenient flux-normalized convention defines a partial-wave amplitude matrix by

$$
\mathcal f^l_{ba}(E)
=
\frac{S^l_{ba}(E)-\delta_{ba}}{2i\sqrt{k_b k_a}},
$$
>[!danger] what? Shouldn't this come from derivations instead of straight-up definition?

when the reduced masses are the same or when the states have been normalized to unit flux. More generally, the precise prefactors depend on whether the channel states are momentum-normalized, energy-normalized, or flux-normalized.

The structural content is independent of this convention:

$$
\text{partial-wave amplitude}
\quad \propto \quad
S^l-1.
$$

For spinless scattering from incoming channel $a$ to outgoing channel $b$, a common schematic form is

$$
f_{ba}(\theta;E)
=
\sum_{l=0}^{\infty}(2l+1)f^l_{ba}(E)P_l(\cos\theta),
$$

where $f^l_{ba}$ is proportional to $S^l_{ba}-\delta_{ba}$. The diagonal subtraction removes the no-scattering part in the same channel. For $b\ne a$, there is no identity contribution, so the transition amplitude is directly proportional to $S^l_{ba}$.

In the single-channel equal-velocity limit, this reduces to

$$
f^l(k)
=
\frac{S_l(k)-1}{2ik},
$$

and therefore to Sakurai's formula.

---

## 10. Closed channels and Feshbach resonance logic

At a fixed energy $E$, only open channels appear as asymptotic rows and columns of the physical $S$ matrix. A closed channel has

$$
E<\epsilon_c,
\qquad
k_c=i\kappa_c,
$$
>[!danger] can we evaluate S operator onto closed channels?

and its coordinate-space component decays like

$$
\frac{e^{-\kappa_c r}}{r}
$$

rather than carrying outgoing flux to infinity. Therefore it is not an external detector channel.

However, closed channels still enter the internal transition operator through the resolvent

$$
T(E)=V+VG_0^{(+)}(E)T(E).
$$

In a channel basis, intermediate propagation contains denominators of the form

$$
\frac{1}{E-\epsilon_c-\hbar^2q^2/(2\mu_c)+i0}.
$$

For a closed channel, this propagation is virtual rather than asymptotically flux carrying. If the closed-channel Hamiltonian has a bound state near the open-channel scattering energy, coupling between open and closed subspaces can strongly modify the open-channel block $S^l_{oo}(E)$. This is the basic mechanism behind a Feshbach resonance.

>[!danger] I guess we need to show why that bound state can strongly modify things

From the present viewpoint, **the resonance is not fundamentally a resonance of a phase shift**. It is a resonance of the open-channel partial-wave $S$ matrix caused by coupling to a closed-channel state. In the special case where only one open elastic channel is observed, the same behavior can be parameterized as a rapid energy dependence of a phase shift $\delta_l(E)$.

---

## 11. Recovering the Sakurai single-channel limit

The Sakurai formula is recovered by making the following reductions:

1. Keep only one asymptotic channel.
2. Take a spinless central potential.
3. Use one open elastic channel at the scattering energy.
4. Drop all channel labels $a,b$.
5. Replace the one-dimensional partial-wave block by a phase:

$$
S_l=e^{2i\delta_l}.
$$

Then

$$
f_l
=
\frac{S_l-1}{2ik}
=
\frac{e^{2i\delta_l}-1}{2ik},
$$

and

$$
f(\theta)
=
\sum_{l=0}^{\infty}(2l+1)f_lP_l(\cos\theta).
$$

Therefore

$$
\boxed{
f(\theta)
=
\frac{1}{2ik}
\sum_{l=0}^{\infty}(2l+1)
\left(e^{2i\delta_l}-1\right)P_l(\cos\theta)
}
$$

and

$$
\frac{d\sigma}{d\Omega}
=
|f(\theta)|^2.
$$

This is the standard single-channel partial-wave result. The channel-resolved viewpoint explains why it is special: each angular-momentum block has only one open elastic channel, so a unitary matrix block collapses to a single phase.

---

## 12. Logical summary

Rotational symmetry implies that scattering commutes with rotations. Therefore $S$ and the on-shell $T$ matrix decompose into angular-momentum blocks.

In spinless notation, the momentum-channel basis $|\mathbf k,a\rangle$ is replaced by partial-wave channel states

$$
|k,l,m,a\rangle
$$

or by energy-normalized states

$$
|E,l,m,a\rangle.
$$

Rotational invariance gives

$$
\langle E',l',m',b|S|E,l,m,a\rangle
\propto
\delta(E'-E)\delta_{l'l}\delta_{m'm}S^l_{ba}(E).
$$

For each $l$ and $E$, the fundamental object is the partial-wave channel block

$$
S^l(E)=\{S^l_{ba}(E)\}.
$$

If all open channels are included, this block is unitary:

$$
S^l(E)^\dagger S^l(E)=1.
$$

In the one-channel elastic case, this unitary matrix is only a one-by-one matrix, so

$$
S_l=e^{2i\delta_l}.
$$

The phase shift $\delta_l$ is therefore a special parameterization of a one-dimensional unitary block, not the most fundamental scattering object.

In multichannel scattering, a single phase shift is replaced by a unitary matrix. One may diagonalize this matrix to obtain eigenphase shifts, but the physical channel amplitudes also depend on channel mixing. If one looks only at one elastic element while other open channels exist, that element may be written as

$$
S^l_{aa}=\eta^l_a e^{2i\delta^l_a},
$$

with $\eta^l_a<1$ describing loss from the observed elastic channel into other open channels.

The single-channel limit recovers Sakurai's expression

$$
f(\theta)
=
\frac{1}{2ik}
\sum_{l=0}^{\infty}(2l+1)
\left(e^{2i\delta_l}-1\right)P_l(\cos\theta).
$$

Thus the conceptual hierarchy is

$$
\boxed{
\text{partial-wave }S\text{-matrix block}
\quad \longrightarrow \quad
\text{one-channel phase shift only as a special case}
}
$$
