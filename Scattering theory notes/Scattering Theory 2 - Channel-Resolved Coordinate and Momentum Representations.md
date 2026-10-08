This note continues the operator-level discussion of scattering theory by unpacking the collective asymptotic-state label used previously. The earlier note used symbols such as $|\alpha\rangle$, $|\beta\rangle$, $E_\alpha$, and $T_{\beta\alpha}(E)$ to emphasize the asymptotic input-output structure. We now make one common and important specialization: the separated fragments have relative motion described by a coordinate or momentum, together with additional channel data.

The main point is conceptual as much as technical. A coordinate-space wavefunction is not the state itself. It is one representation of an abstract ket. In multichannel scattering, the state has several coordinate-space components, one for each channel. Thus a symbol such as $\psi_a(\mathbf r)$ means

$$
\psi_a(\mathbf r)=\langle \mathbf r,a|\psi\rangle,
$$

not that the physical state is literally a single scalar function of $\mathbf r$. This distinction is exactly what allows Feshbach resonance theory, coupled-channel scattering, and inelastic scattering to use ordinary coordinate-space scattering asymptotics while still involving several internal channels.

---

## 1. From an asymptotic-state label to spatial and channel data

In the previous note, the generalized eigenvectors of the reference Hamiltonian were written schematically as

$$
H_0|\alpha\rangle=E_\alpha|\alpha\rangle.
$$

The label $\alpha$ specifies a complete reference asymptotic state. In a one-channel elastic problem, it may be just a momentum vector $\mathbf k$. In a simple multichannel problem, it can be resolved into relative momentum and a channel label:

$$
\alpha=(\mathbf k,a),
$$

The corresponding coordinate basis is labeled by

$$
|\mathbf r,a\rangle.
$$

The coordinate basis states are generally not eigenvectors of $H_0$; they provide another representation of the same asymptotic space. Here $\mathbf r$ is the relative coordinate between the separated fragments in a specified asymptotic arrangement, and $a$ denotes the non-spatial channel data. The channel label $a$ may include, for example,

- the internal bound state of each separated fragment;
- hyperfine, spin, rotational, vibrational, or electronic quantum numbers;
- an arrangement label specifying which clusters are asymptotically separated;
- conserved discrete quantum numbers used to block-diagonalize the problem.

The label $a$ also determines properties such as the threshold energy $\epsilon_a$ and, when the separated fragments differ between channels, the reduced mass $\mu_a$. These are properties of a channel rather than extra labels that must be specified independently.

The important point is that $a$ is not the same thing as $\mathbf r$ or $\mathbf k$. The vector $\mathbf r$ describes relative spatial motion in a chosen asymptotic arrangement. The label $a$ describes which internal or arrangement channel that relative motion belongs to.

Thus the single-channel basis $|\mathbf r\rangle$ is replaced by a channel-resolved basis

$$
|\mathbf r,a\rangle,
$$

and the single-channel momentum basis $|\mathbf k\rangle$ is replaced by

$$
|\mathbf k,a\rangle.
$$

For many purposes one may think of these as tensor-product states,

$$
|\mathbf r,a\rangle=|\mathbf r\rangle\otimes |a\rangle,
\qquad
|\mathbf k,a\rangle=|\mathbf k\rangle\otimes |a\rangle.
$$

This notation should not be interpreted too rigidly. In rearrangement scattering, different channels may use different Jacobi coordinates. In the simplest coupled-channel setting, however, the tensor-product picture is exactly the right mental model.

---

## 2. The asymptotic Hilbert space

The asymptotic Hilbert space is the space in which separated-fragment channel states live. In the simple case where the set of channels is discrete, it has the form

$$
\mathcal H_{\mathrm{as}}
=
L^2(\mathbb R^3,d^3r)\otimes \mathcal H_{\mathrm{ch}},
$$

where $L^2(\mathbb R^3,d^3r)$ describes relative motion and $\mathcal H_{\mathrm{ch}}$ is spanned by orthonormal channel vectors $|a\rangle$:

$$
\langle b|a\rangle=\delta_{ba},
\qquad
\sum_a |a\rangle\langle a|=1_{\mathrm{ch}}.
$$

Equivalently, if only a finite or countable number of channels is present, a state in $\mathcal H_{\mathrm{as}}$ can be written as a column of coordinate-space components,

$$
|\psi\rangle
\quad \longleftrightarrow \quad
\begin{pmatrix}
\psi_1(\mathbf r)\\
\psi_2(\mathbf r)\\
\vdots
\end{pmatrix}.
$$

This column is a representation of the ket, not the ket itself. Changing from coordinate to momentum representation changes the component functions, while the underlying vector $|\psi\rangle$ remains the same.

If some channel labels are themselves continuous, then the sum over $a$ must be replaced by the appropriate mixture of sums and integrals. To keep the notation readable, this note writes $\sum_a$ and $\delta_{ba}$, with the understanding that continuous channel labels require the corresponding integration measures and Dirac delta functions.

---

## 3. Coordinate and momentum channel bases

Use the continuum normalization

$$
\langle \mathbf r|\mathbf r'\rangle
=
\delta^{(3)}(\mathbf r-\mathbf r'),
\qquad
\langle \mathbf k|\mathbf k'\rangle
=
\delta^{(3)}(\mathbf k-\mathbf k'),
$$

and

$$
\langle \mathbf r|\mathbf k\rangle
=
\frac{1}{(2\pi)^{3/2}}e^{i\mathbf k\cdot\mathbf r}.
$$

Then the channel-resolved basis states satisfy

$$
\langle \mathbf r,b|\mathbf r',a\rangle
=
\delta_{ba}\delta^{(3)}(\mathbf r-\mathbf r'),
$$

and

$$
\langle \mathbf k,b|\mathbf k',a\rangle
=
\delta_{ba}\delta^{(3)}(\mathbf k-\mathbf k').
$$

The mixed coordinate-momentum overlap is

$$
\langle \mathbf r,b|\mathbf k,a\rangle
=
\delta_{ba}\frac{1}{(2\pi)^{3/2}}e^{i\mathbf k\cdot\mathbf r}.
$$

The identity operator on the asymptotic scattering space may be written either as

$$
1
=
\sum_a\int d^3r\,|\mathbf r,a\rangle\langle \mathbf r,a|,
$$

or as

$$
1
=
\sum_a\int d^3k\,|\mathbf k,a\rangle\langle \mathbf k,a|.
$$

These equations are the more explicit versions of the schematic relation used earlier,

$$
1=\int d\alpha\,|\alpha\rangle\langle\alpha|.
$$

In the present notation, the abstract label $\alpha$ has been resolved into a continuous spatial momentum $\mathbf k$ and a discrete channel label $a$.

---

## 4. Coordinate-space and momentum-space components of a ket

Given an abstract ket $|\psi\rangle$, its coordinate-space channel component is defined by projection:

$$
\psi_a(\mathbf r)
=
\langle \mathbf r,a|\psi\rangle.
$$

Its momentum-space channel component is similarly

$$
\psi_a(\mathbf k)
=
\langle \mathbf k,a|\psi\rangle.
$$

These components are related by Fourier transformation within each channel:

$$
\psi_a(\mathbf r)
=
\int d^3k\,\langle \mathbf r,a|\mathbf k,a\rangle\psi_a(\mathbf k)
=
\frac{1}{(2\pi)^{3/2}}\int d^3k\,e^{i\mathbf k\cdot\mathbf r}\psi_a(\mathbf k),
$$

and

$$
\psi_a(\mathbf k)
=
\int d^3r\,\langle \mathbf k,a|\mathbf r,a\rangle\psi_a(\mathbf r)
=
\frac{1}{(2\pi)^{3/2}}\int d^3r\,e^{-i\mathbf k\cdot\mathbf r}\psi_a(\mathbf r).
$$

The norm of a normalizable channel packet may be written in either representation:

$$
\langle \psi|\psi\rangle
=
\sum_a\int d^3r\,|\psi_a(\mathbf r)|^2
=
\sum_a\int d^3k\,|\psi_a(\mathbf k)|^2.
$$

This formula is often the simplest way to remember what a multichannel wavefunction means. It is not one scalar function. It is a list of scalar functions, one for each channel, and that list is the coordinate representation of a single abstract ket.

---

## 5. Thresholds and channel kinetic energies

A channel usually has an internal energy offset called a threshold. Denote it by $\epsilon_a$. Physically, $\epsilon_a$ is the energy of the separated fragments in channel $a$ when their relative kinetic energy is zero.

For a free asymptotic state $|\mathbf k,a\rangle$, the reference Hamiltonian has eigenvalue

$$
H_0|\mathbf k,a\rangle
=
\left(\epsilon_a+\frac{\hbar^2k^2}{2\mu_a}\right)|\mathbf k,a\rangle,
$$

where $\mu_a$ is the reduced mass in channel $a$. Thus the total channel energy is

$$
E_a(\mathbf k)
=
\epsilon_a+\frac{\hbar^2k^2}{2\mu_a}.
$$

At a fixed total energy $E$, the kinetic energy available in channel $a$ is

$$
K_a(E)=E-\epsilon_a.
$$

If $K_a(E)>0$, the channel momentum is real:

$$
k_a(E)=\frac{\sqrt{2\mu_a(E-\epsilon_a)}}{\hbar}.
$$

If $K_a(E)<0$, the corresponding wave number is imaginary. It is then useful to define

$$
\kappa_a(E)=\frac{\sqrt{2\mu_a(\epsilon_a-E)}}{\hbar},
$$

so that $k_a=i\kappa_a$ up to a choice of branch. This distinction is the basis for the terminology of open and closed channels, discussed below.

---

## 6. The multichannel reference Hamiltonian

In the momentum-channel basis, the reference Hamiltonian is diagonal:

$$
H_0
=
\sum_a\int d^3k\,
|\mathbf k,a\rangle
\left(\epsilon_a+\frac{\hbar^2k^2}{2\mu_a}\right)
\langle \mathbf k,a|.
$$

Equivalently, its matrix elements are

$$
\langle \mathbf k,b|H_0|\mathbf k',a\rangle
=
\delta_{ba}\delta^{(3)}(\mathbf k-\mathbf k')
\left(\epsilon_a+\frac{\hbar^2k^2}{2\mu_a}\right).
$$

In the coordinate-channel basis, $H_0$ is also diagonal in the channel label, but it is a differential operator in $\mathbf r$. Its action on a state is

$$
(H_0\psi)_b(\mathbf r)
=
\langle \mathbf r,b|H_0|\psi\rangle
=
\left(\epsilon_b-\frac{\hbar^2}{2\mu_b}\nabla^2\right)\psi_b(\mathbf r).
$$

The corresponding coordinate-space kernel is

$$
\langle \mathbf r,b|H_0|\mathbf r',a\rangle
=
\delta_{ba}
\left(\epsilon_a-\frac{\hbar^2}{2\mu_a}\nabla^2_{\mathbf r}\right)
\delta^{(3)}(\mathbf r-\mathbf r').
$$

The derivative acts on the $\mathbf r$ variable. This expression is the channel-resolved version of the one-channel free Hamiltonian $\mathbf p^2/2m$.

---

## 7. Interaction matrix elements in channel space

The exact Hamiltonian is

$$
H=H_0+V.
$$

The interaction $V$ may change both the relative motion and the non-spatial channel label. Its coordinate-channel matrix elements are

$$
V_{ba}(\mathbf r,\mathbf r')
=
\langle \mathbf r,b|V|\mathbf r',a\rangle.
$$

Acting on a state, the interaction gives

$$
(V\psi)_b(\mathbf r)
=
\sum_a\int d^3r'\,
V_{ba}(\mathbf r,\mathbf r')\psi_a(\mathbf r').
$$

The first index $b$ labels the output channel, while the second index $a$ labels the input channel. Thus $V_{ba}$ is the part of the interaction that converts an incoming component in channel $a$ into an outgoing component in channel $b$.

A common special case is a local coupled-channel interaction:

$$
V_{ba}(\mathbf r,\mathbf r')
=
V_{ba}(\mathbf r)\delta^{(3)}(\mathbf r-\mathbf r').
$$

Then

$$
(V\psi)_b(\mathbf r)
=
\sum_a V_{ba}(\mathbf r)\psi_a(\mathbf r).
$$

The diagonal entries $V_{aa}(\mathbf r)$ are intrachannel potentials. The off-diagonal entries $V_{ba}(\mathbf r)$ with $b\ne a$ are channel couplings. These off-diagonal terms are the basic mathematical mechanism behind inelastic transitions, spin exchange, hyperfine coupling, and Feshbach resonances.

In momentum representation, the interaction matrix elements are

$$
V_{ba}(\mathbf k,\mathbf k')
=
\langle \mathbf k,b|V|\mathbf k',a\rangle.
$$

They are related to the coordinate-space kernel by

$$
V_{ba}(\mathbf k,\mathbf k')
=
\frac{1}{(2\pi)^3}
\int d^3r\int d^3r'\,
e^{-i\mathbf k\cdot\mathbf r}
V_{ba}(\mathbf r,\mathbf r')
e^{i\mathbf k'\cdot\mathbf r'}.
$$

For a local interaction this reduces to

$$
V_{ba}(\mathbf k,\mathbf k')
=
\frac{1}{(2\pi)^3}
\int d^3r\,
e^{-i(\mathbf k-\mathbf k')\cdot\mathbf r}V_{ba}(\mathbf r).
$$

This is the multichannel version of the Fourier transform of the potential that appears in the Born approximation.

---

## 8. The stationary Schrödinger equation in channel components

Let $|\psi\rangle$ be an exact stationary state at total energy $E$:

$$
H|\psi\rangle=E|\psi\rangle.
$$

Projecting with $\langle \mathbf r,b|$ gives

$$
\left(E-\epsilon_b+\frac{\hbar^2}{2\mu_b}\nabla^2\right)\psi_b(\mathbf r)
=
\sum_a\int d^3r'\,V_{ba}(\mathbf r,\mathbf r')\psi_a(\mathbf r').
$$

For a local interaction,

$$
\left(E-\epsilon_b+\frac{\hbar^2}{2\mu_b}\nabla^2\right)\psi_b(\mathbf r)
=
\sum_a V_{ba}(\mathbf r)\psi_a(\mathbf r).
$$

Equivalently,

$$
\left[-\frac{\hbar^2}{2\mu_b}\nabla^2+\epsilon_b\right]\psi_b(\mathbf r)
+
\sum_a V_{ba}(\mathbf r)\psi_a(\mathbf r)
=
E\psi_b(\mathbf r).
$$

This is the coordinate-space coupled-channel Schrödinger equation. It is not a different theory from the abstract equation $H|\psi\rangle=E|\psi\rangle$. It is the result of representing that abstract equation in the basis $|\mathbf r,a\rangle$.

This is the point at which it becomes especially important not to identify the wavefunction with the ket itself. The single abstract equation

$$
H|\psi\rangle=E|\psi\rangle
$$

becomes a system of coupled differential or integro-differential equations only after we choose the channel-coordinate representation.

---

## 9. Channel-resolved free resolvent

The free resolvent is

$$
G_0^{(+)}(E)=\frac{1}{E-H_0+i0}.
$$

Since $H_0$ is diagonal in the channel-momentum basis, its matrix elements are

$$
\langle \mathbf q,b|G_0^{(+)}(E)|\mathbf q',a\rangle
=
\delta_{ba}\delta^{(3)}(\mathbf q-\mathbf q')
\frac{1}{E-\epsilon_a-\hbar^2q^2/(2\mu_a)+i0}.
$$

Thus intermediate propagation is diagonal in the reference channels, while the interaction $V$ is what couples different channels. In coordinate space,

$$
G_{0,a}^{(+)}(E;\mathbf r,\mathbf r')
=
\langle \mathbf r,a|G_0^{(+)}(E)|\mathbf r',a\rangle
$$

is given by

$$
G_{0,a}^{(+)}(E;\mathbf r,\mathbf r')
=
\int \frac{d^3q}{(2\pi)^3}\,
\frac{e^{i\mathbf q\cdot(\mathbf r-\mathbf r')}}
{E-\epsilon_a-\hbar^2q^2/(2\mu_a)+i0}.
$$

Equivalently,

$$
\langle \mathbf r,b|G_0^{(+)}(E)|\mathbf r',a\rangle
=
\delta_{ba}G_{0,a}^{(+)}(E;\mathbf r,\mathbf r').
$$

For an open channel, $E>\epsilon_a$, define $k_a$ by

$$
E-\epsilon_a=\frac{\hbar^2k_a^2}{2\mu_a}.
$$

Then the outgoing Green's function has the familiar large-distance Helmholtz behavior. With the normalization used above,

$$
G_{0,a}^{(+)}(E;\mathbf r,\mathbf r')
=
-\frac{2\mu_a}{\hbar^2}\frac{e^{ik_a|\mathbf r-\mathbf r'|}}{4\pi|\mathbf r-\mathbf r'|}
$$

for the open-channel outgoing boundary condition. For a closed channel, $E<\epsilon_a$, the same expression is analytically continued to an exponentially decaying kernel with $k_a=i\kappa_a$:

$$
G_{0,a}^{(+)}(E;\mathbf r,\mathbf r')
=
-\frac{2\mu_a}{\hbar^2}\frac{e^{-\kappa_a|\mathbf r-\mathbf r'|}}{4\pi|\mathbf r-\mathbf r'|},
$$

away from the singular point $\mathbf r=\mathbf r'$. This is why closed channels do not carry outgoing flux to infinity, even though they may strongly affect the open-channel scattering through virtual propagation.

---

## 10. Channel-resolved Lippmann--Schwinger equation

Let the incoming asymptotic channel be $a$, with incident relative momentum $\mathbf k_a$. The total energy is

$$
E=\epsilon_a+\frac{\hbar^2k_a^2}{2\mu_a}.
$$

The exact outgoing scattering vector is denoted

$$
|\psi_{\mathbf k_a a}^{(+)}\rangle.
$$

It satisfies the abstract Lippmann--Schwinger equation

$$
|\psi_{\mathbf k_a a}^{(+)}\rangle
=
|\mathbf k_a,a\rangle
+
G_0^{(+)}(E)V|\psi_{\mathbf k_a a}^{(+)}\rangle.
$$

Project with $\langle \mathbf r,b|$. Define

$$
\psi_{ba}^{(+)}(\mathbf r;\mathbf k_a)
\equiv
\langle \mathbf r,b|\psi_{\mathbf k_a a}^{(+)}\rangle.
$$

The first subscript $b$ labels the observed coordinate-space component. The second subscript $a$ records the prepared incoming channel. The argument after the semicolon, $\mathbf k_a$, records the incident momentum in channel $a$.

Then

$$
\psi_{ba}^{(+)}(\mathbf r;\mathbf k_a)
=
\delta_{ba}\frac{1}{(2\pi)^{3/2}}e^{i\mathbf k_a\cdot\mathbf r}
+
\sum_c\int d^3r'\int d^3r''\,
G_{0,b}^{(+)}(E;\mathbf r,\mathbf r')
V_{bc}(\mathbf r',\mathbf r'')
\psi_{ca}^{(+)}(\mathbf r'';\mathbf k_a).
$$

For a local coupled-channel potential,

$$
\psi_{ba}^{(+)}(\mathbf r;\mathbf k_a)
=
\delta_{ba}\frac{1}{(2\pi)^{3/2}}e^{i\mathbf k_a\cdot\mathbf r}
+
\sum_c\int d^3r'\,
G_{0,b}^{(+)}(E;\mathbf r,\mathbf r')
V_{bc}(\mathbf r')
\psi_{ca}^{(+)}(\mathbf r';\mathbf k_a).
$$

This is the channel-resolved Lippmann--Schwinger equation in coordinate representation. It says the following:

1. The incident plane wave appears only in the prepared incoming channel $a$.
2. The interaction can transfer amplitude into other channels $b$.
3. After the last interaction, each channel propagates according to its own free Green's function $G_{0,b}^{(+)}$.
4. Open channels produce outgoing waves at infinity; closed channels produce evanescent tails.

The same equation in momentum representation follows by projecting with $\langle \mathbf p,b|$:

$$
\psi_{ba}^{(+)}(\mathbf p;\mathbf k_a)
=
\delta_{ba}\delta^{(3)}(\mathbf p-\mathbf k_a)
+
\frac{1}{E-\epsilon_b-\hbar^2p^2/(2\mu_b)+i0}
\sum_c\int d^3q\,
V_{bc}(\mathbf p,\mathbf q)
\psi_{ca}^{(+)}(\mathbf q;\mathbf k_a).
$$
This is the same abstract equation in a different basis.

---

## 11. Channel-resolved transition operator

The operator equation for the transition operator remains

$$
T(E)=V+VG_0^{(+)}(E)T(E).
$$

In the resolved momentum-channel basis, this becomes

$$
T_{ba}(\mathbf k_b,\mathbf k_a;E)
=
V_{ba}(\mathbf k_b,\mathbf k_a)
+
\sum_c\int d^3q\,
V_{bc}(\mathbf k_b,\mathbf q)
\frac{1}{E-\epsilon_c-\hbar^2q^2/(2\mu_c)+i0}
T_{ca}(\mathbf q,\mathbf k_a;E).
$$

Here

$$
T_{ba}(\mathbf k_b,\mathbf k_a;E)
=
\langle \mathbf k_b,b|T(E)|\mathbf k_a,a\rangle.
$$

The physical on-shell transition from incoming channel $a$ to outgoing channel $b$ at total energy $E$ uses momenta satisfying

$$
E=\epsilon_a+\frac{\hbar^2k_a^2}{2\mu_a}
=
\epsilon_b+\frac{\hbar^2k_b^2}{2\mu_b}.
$$

The directions of $\mathbf k_a$ and $\mathbf k_b$ may differ, and the magnitudes usually differ if $\epsilon_a\ne \epsilon_b$ or $\mu_a\ne\mu_b$. Thus in multichannel scattering, energy conservation does not generally imply equal incoming and outgoing wave numbers. It implies equal total energy.

Using the scattering vector, the same on-shell matrix element may be written as

$$
T_{ba}(\mathbf k_b,\mathbf k_a;E)
=
\langle \mathbf k_b,b|V|\psi_{\mathbf k_a a}^{(+)}\rangle.
$$

In coordinate representation this is

$$
T_{ba}(\mathbf k_b,\mathbf k_a;E)
=
\sum_c\int d^3r\int d^3r'\,
\langle \mathbf k_b,b|\mathbf r,b\rangle
V_{bc}(\mathbf r,\mathbf r')
\psi_{ca}^{(+)}(\mathbf r';\mathbf k_a).
$$

For a local interaction,

$$
T_{ba}(\mathbf k_b,\mathbf k_a;E)
=
\frac{1}{(2\pi)^{3/2}}\sum_c\int d^3r\,
e^{-i\mathbf k_b\cdot\mathbf r}
V_{bc}(\mathbf r)
\psi_{ca}^{(+)}(\mathbf r;\mathbf k_a).
$$

In the first Born approximation, one replaces the exact scattering vector by the incident free state. Then only the component $c=a$ appears:

$$
T_{ba}^{(1)}(\mathbf k_b,\mathbf k_a;E)
=
\langle \mathbf k_b,b|V|\mathbf k_a,a\rangle
=
V_{ba}(\mathbf k_b,\mathbf k_a).
$$

This is the channel-resolved version of the statement that the first Born approximation is the Fourier transform of the potential.

---

## 12. Open and closed channels

At fixed total energy $E$, a channel $a$ is called open if

$$
E>\epsilon_a.
$$

Then the channel has positive kinetic energy and real wave number $k_a$:

$$
E-\epsilon_a=\frac{\hbar^2k_a^2}{2\mu_a}.
$$

An open channel can carry probability flux to infinity. It can appear as an asymptotic incoming or outgoing channel in the physical $S$ matrix at that energy.

A channel $a$ is called closed if

$$
E<\epsilon_a.
$$

Then the kinetic energy relative to that threshold is negative. The corresponding wave number is imaginary,

$$
k_a=i\kappa_a,
\qquad
\kappa_a=\frac{\sqrt{2\mu_a(\epsilon_a-E)}}{\hbar}.
$$

A closed channel cannot support an oscillatory plane wave at infinity. Its coordinate-space component decays exponentially in the asymptotic region, so it does not appear as an asymptotic detector channel at that energy.

However, closed channels should not be discarded from the internal dynamics. They appear in the sums over intermediate channels in the Lippmann--Schwinger equation and in the transition-operator equation:

$$
\sum_c\int d^3q\,
V_{bc}(\mathbf k_b,\mathbf q)
\frac{1}{E-\epsilon_c-\hbar^2q^2/(2\mu_c)+i0}
T_{ca}(\mathbf q,\mathbf k_a;E).
$$

If channel $c$ is closed at energy $E$, its denominator has no on-shell singularity for real $\mathbf q$. Nevertheless, its virtual propagation can shift phases, modify effective open-channel interactions, or produce resonant behavior when a bound state associated with the closed-channel sector lies near an open-channel threshold. This is the basic structural reason Feshbach resonances are possible.

Thus the phrase open channel refers to asymptotic accessibility at the chosen total energy. It does not mean that only open channels matter inside the collision region.

---

## 13. What Sakurai's single-channel notation suppresses

In the elementary single-channel discussion, one writes states such as $|\mathbf k\rangle$, wavefunctions such as $\langle \mathbf r|\psi^{(+)}\rangle$, and an outgoing asymptotic form such as an incident plane wave plus an outgoing spherical wave. This notation is efficient because there is only one threshold, one reduced mass, and one channel component.

In channel-resolved notation, the analogous object is not a single function $\psi^{(+)}(\mathbf r)$ but a collection

$$
\left\{\psi_{ba}^{(+)}(\mathbf r;\mathbf k_a)\right\}_b.
$$

The incident term is present only in the prepared channel $a$:

$$
\delta_{ba}\frac{1}{(2\pi)^{3/2}}e^{i\mathbf k_a\cdot\mathbf r}.
$$

The scattered part may appear in every open channel $b$, and the closed-channel components may be nonzero near the interaction region while decaying at large $r$.

Thus the single-channel statement

$$
|\psi^{(+)}\rangle
=|\mathbf k\rangle+G_0^{(+)}(E)V|\psi^{(+)}\rangle
$$

is better read, in the multichannel setting, as the compact operator form of many coupled equations:

$$
\psi_b
=
\text{incident component in channel }b
+
\text{outgoing free propagation in channel }b
\text{ after coupling from all channels}.
$$

This is the representation framework that the single-channel notation suppresses.

---

## 14. Logical summary

The collective asymptotic-state label $\alpha$ used in the abstract theory can be resolved in the momentum basis as

$$
\alpha=(\mathbf k,a)
$$

The corresponding coordinate basis uses states labeled by

$$
|\mathbf r,a\rangle.
$$

The asymptotic Hilbert space is a space of relative motion together with a channel space:

$$
\mathcal H_{\mathrm{as}}
=
L^2(\mathbb R^3)\otimes \mathcal H_{\mathrm{ch}}.
$$

The basis states obey

$$
\langle \mathbf r,b|\mathbf r',a\rangle
=
\delta_{ba}\delta^{(3)}(\mathbf r-\mathbf r'),
\qquad
\langle \mathbf k,b|\mathbf k',a\rangle
=
\delta_{ba}\delta^{(3)}(\mathbf k-\mathbf k').
$$

The coordinate-space and momentum-space wavefunctions are projections of a ket:

$$
\psi_a(\mathbf r)=\langle \mathbf r,a|\psi\rangle,
\qquad
\psi_a(\mathbf k)=\langle \mathbf k,a|\psi\rangle.
$$

The free Hamiltonian is diagonal in channel space:

$$
H_0|\mathbf k,a\rangle
=
\left(\epsilon_a+\frac{\hbar^2k^2}{2\mu_a}\right)|\mathbf k,a\rangle.
$$

The interaction has channel matrix elements

$$
V_{ba}(\mathbf r,\mathbf r')
=
\langle \mathbf r,b|V|\mathbf r',a\rangle,
$$

with the local special case

$$
V_{ba}(\mathbf r,\mathbf r')
=
V_{ba}(\mathbf r)\delta^{(3)}(\mathbf r-\mathbf r').
$$

The channel-resolved Lippmann--Schwinger equation is

$$
\psi_{ba}^{(+)}(\mathbf r;\mathbf k_a)
=
\delta_{ba}\frac{1}{(2\pi)^{3/2}}e^{i\mathbf k_a\cdot\mathbf r}
+
\sum_c\int d^3r'\int d^3r''\,
G_{0,b}^{(+)}(E;\mathbf r,\mathbf r')
V_{bc}(\mathbf r',\mathbf r'')
\psi_{ca}^{(+)}(\mathbf r'';\mathbf k_a).
$$

At fixed total energy $E$, open channels satisfy $E>\epsilon_a$ and carry asymptotic flux. Closed channels satisfy $E<\epsilon_a$ and decay asymptotically, but they may still enter virtually through the resolvent and modify the open-channel scattering.

The next section will use the outgoing Green's function in coordinate space to define the channel-resolved scattering amplitude $f_{ba}$. That step will connect the abstract transition matrix element $\langle \mathbf k_b,b|T(E)|\mathbf k_a,a\rangle$ to the coefficient of the outgoing spherical wave in each open final channel.
