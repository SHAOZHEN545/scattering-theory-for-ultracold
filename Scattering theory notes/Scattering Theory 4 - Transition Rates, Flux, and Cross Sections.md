The previous note defined the channel-resolved scattering amplitude $f_{ba}$ as the coefficient of the outgoing spherical wave in open final channel $b$. We now connect that amplitude to measurable cross sections.

The logic follows Sakurai's route:

$$
S\text{-matrix element}
\quad\longrightarrow\quad
\text{transition probability}
\quad\longrightarrow\quad
\text{transition rate}
\quad\longrightarrow\quad
\frac{\text{transition rate}}{\text{incident flux}}
=
\text{cross section}.
$$

The important conceptual point is that a cross section is not a probability. A probability depends on the prepared wave packet and on the detector acceptance. A cross section is a rate normalized by the incoming flux. It has dimensions of area and is designed to describe the intrinsic scattering strength of the target, independent of how intense the incident beam is.

---

## 1. Channel packets and transition probabilities

Sharp momentum-channel states $|\mathbf k,a\rangle$ are not normalizable. Therefore an actual transition probability must first be defined using wave packets.

Let the incoming packet be prepared in channel $a$:

$$
|g_a\rangle
=
\int d^3k\,g_a(\mathbf k)|\mathbf k,a\rangle,
\qquad
\int d^3k\,|g_a(\mathbf k)|^2=1.
$$

Let the detector be represented by an outgoing packet in channel $b$:

$$
|h_b\rangle
=
\int d^3k\,h_b(\mathbf k)|\mathbf k,b\rangle,
\qquad
\int d^3k\,|h_b(\mathbf k)|^2=1.
$$

The $S$-matrix amplitude between these packets is

$$
\mathcal A_{h_b g_a}
=
\langle h_b|S|g_a\rangle.
$$

Inserting momentum-channel completeness gives

$$
\mathcal A_{h_b g_a}
=
\int d^3k_b\int d^3k_a\,
h_b^*(\mathbf k_b)
S_{ba}(\mathbf k_b,\mathbf k_a)
g_a(\mathbf k_a),
$$

where

$$
S_{ba}(\mathbf k_b,\mathbf k_a)
=
\langle \mathbf k_b,b|S|\mathbf k_a,a\rangle.
$$

The probability for this packet-to-packet process is

$$
P_{h_b\leftarrow g_a}
=
|\mathcal A_{h_b g_a}|^2.
$$

More generally, if the detector accepts a finite region $\mathcal D_b$ of final momenta in channel $b$, define the projector

$$
P_{\mathcal D_b}
=
\int_{\mathcal D_b}d^3k_b\,
|\mathbf k_b,b\rangle\langle \mathbf k_b,b|.
$$

Then the probability that the final state lies in that accepted region is

$$
P_{\mathcal D_b\leftarrow g_a}
=
\|P_{\mathcal D_b}S|g_a\rangle\|^2.
$$

This expression is finite because both the incoming packet and the detector window are finite. By contrast, the sharp object $S_{ba}(\mathbf k_b,\mathbf k_a)$ is distribution-valued. It should not be interpreted directly as an ordinary probability amplitude between normalizable states.

---

## 2. Separating the transition part of the $S$ matrix

For sharp channel labels, the $S$ matrix has the standard form

$$
S_{\beta\alpha}
=
\delta(\beta-\alpha)
-
2\pi i\,\delta(E_\beta-E_\alpha)T_{\beta\alpha}(E_\alpha).
$$

Resolving $\alpha=(\mathbf k_a,a)$ and $\beta=(\mathbf k_b,b)$, this becomes

$$
S_{ba}(\mathbf k_b,\mathbf k_a)
=
\delta_{ba}\delta^{(3)}(\mathbf k_b-\mathbf k_a)
-
2\pi i\,
\delta(E_b(\mathbf k_b)-E_a(\mathbf k_a))
T_{ba}(\mathbf k_b,\mathbf k_a;E_a).
$$

Here

$$
E_a(\mathbf k_a)
=
\epsilon_a+\frac{\hbar^2k_a^2}{2\mu_a},
\qquad
E_b(\mathbf k_b)
=
\epsilon_b+\frac{\hbar^2k_b^2}{2\mu_b}.
$$

The first term is the identity, or no-transition, contribution. The second term is the scattering contribution. It is proportional to the on-shell energy-conserving delta function. This expresses the fact that the full Hamiltonian is time independent: the total channel energy is conserved even though the channel label may change.

For an inelastic transition $a\to b$ with $b\ne a$, only the second term contributes. For elastic scattering with $b=a$, the identity term represents the part of the packet that continues as free motion, while the nontrivial scattering term produces the angular redistribution.

---

## 3. Sharp-channel transition rate: the golden-rule form

Sakurai's transition-rate argument can be carried over directly to channel labels. For a sharp incoming state $|\mathbf k_a,a\rangle$, the differential transition rate into final momentum volume $d^3k_b$ in channel $b$ is

$$
dW_{ba}
=
\frac{2\pi}{\hbar}
|T_{ba}(\mathbf k_b,\mathbf k_a;E)|^2
\delta(E_b(\mathbf k_b)-E)
d^3k_b,
$$
>[!danger] Why is this ????

where

$$
E
=
E_a(\mathbf k_a)
=
\epsilon_a+\frac{\hbar^2k_a^2}{2\mu_a}.
$$

This is the scattering version of Fermi's golden rule, with the perturbation matrix element replaced by the exact transition matrix element $T_{ba}$. Equivalently,

$$
\frac{dW_{ba}}{d^3k_b}
=
\frac{2\pi}{\hbar}
|T_{ba}(\mathbf k_b,\mathbf k_a;E)|^2
\delta\!\left(
\epsilon_b+\frac{\hbar^2k_b^2}{2\mu_b}-E
\right).
$$

This expression is a rate density, not the probability of landing in a single exact continuum state. The probability for a finite detector bin is obtained by integrating this rate over the accepted final momenta and over the time during which the incoming packet overlaps the scattering region.

---

## 4. Density of final states in an open channel

Assume the final channel $b$ is open at total energy $E$:

$$
E>\epsilon_b.
$$

Then the outgoing wave number is real:

$$
k_b(E)
=
\frac{\sqrt{2\mu_b(E-\epsilon_b)}}{\hbar}.
$$

Write

$$
d^3k_b
=
k_b^2\,dk_b\,d\Omega_b.
$$

The energy delta function restricts $k_b$ to its on-shell value. Since

$$
E_b(k_b)
=
\epsilon_b+\frac{\hbar^2k_b^2}{2\mu_b},
$$

we have

$$
\frac{dE_b}{dk_b}
=
\frac{\hbar^2k_b}{\mu_b}
=
\hbar v_b,
$$

where

$$
v_b
=
\frac{\hbar k_b}{\mu_b}.
$$

Therefore

$$
\delta(E_b(k_b)-E)
=
\frac{\mu_b}{\hbar^2k_b}
\delta(k_b-k_b(E)).
$$

Integrating over the radial momentum gives the density of final states per solid angle:

$$
\int_0^\infty k_b^2\,dk_b\,
\delta(E_b(k_b)-E)
=
\frac{\mu_b k_b}{\hbar^2}.
$$

Thus, with the continuum normalization used in these notes,

$$
\rho_b(E,\Omega_b)d\Omega_b
=
\frac{\mu_b k_b}{\hbar^2}d\Omega_b.
$$

In Sakurai's box-normalized derivation, the same density carries an additional factor $L^3/(2\pi)^3$:

$$
\rho_b^{(L)}(E,\Omega_b)d\Omega_b
=
\frac{L^3}{(2\pi)^3}
\frac{\mu_b k_b}{\hbar^2}d\Omega_b.
$$

The continuum-normalized and box-normalized derivations are the same physics. The normalization-dependent volume factors cancel after dividing by the corresponding incident flux.

---

## 5. Transition rate into a solid angle

Using the final-state density just computed, the transition rate into solid angle $d\Omega_b$ is

$$
dW_{ba}
=
\frac{2\pi}{\hbar}
|T_{ba}(\mathbf k_b,\mathbf k_a;E)|^2
\frac{\mu_b k_b}{\hbar^2}
d\Omega_b.
$$

Thus

$$
\frac{dW_{ba}}{d\Omega_b}
=
\frac{2\pi}{\hbar}
\frac{\mu_b k_b}{\hbar^2}
|T_{ba}(\mathbf k_b,\mathbf k_a;E)|^2,
$$

where the external momenta are on shell:

$$
E
=
\epsilon_a+\frac{\hbar^2k_a^2}{2\mu_a}
=
\epsilon_b+\frac{\hbar^2k_b^2}{2\mu_b}.
$$

This is still not a cross section. It is a rate into final channel $b$ and solid angle $d\Omega_b$.

---

## 6. Incoming flux in channel $a$

The incident plane wave in channel $a$ has coordinate-space component

$$
\psi_a^{\mathrm{in}}(\mathbf r)
=
\frac{1}{(2\pi)^{3/2}}e^{i\mathbf k_a\cdot\mathbf r}.
$$

The probability current density in channel $a$ is

$$
\mathbf j_a
=
\frac{\hbar}{2i\mu_a}
\left[
\psi_a^*\nabla\psi_a
-
(\nabla\psi_a^*)\psi_a
\right].
$$

For the incident plane wave this gives

$$
\mathbf j_a^{\mathrm{in}}
=
\frac{1}{(2\pi)^3}
\frac{\hbar\mathbf k_a}{\mu_a}.
$$

The incident flux is the magnitude of this current:

$$
j_a^{\mathrm{in}}
=
\frac{v_a}{(2\pi)^3},
\qquad
v_a
=
\frac{\hbar k_a}{\mu_a}.
$$

In Sakurai's box normalization, the incident wave is $L^{-3/2}e^{i\mathbf k_a\cdot\mathbf r}$ and the corresponding flux is

$$
j_a^{(L)}
=
\frac{v_a}{L^3}.
$$

Again, the normalization-dependent factor cancels in the cross section.

---

## 7. Differential cross section

The differential cross section for scattering from incoming channel $a$ into outgoing open channel $b$ is defined as

$$
\frac{d\sigma_{ba}}{d\Omega_b}
=
\frac{\text{transition rate into }b\text{ per }d\Omega_b}
{\text{incident flux in channel }a}.
$$

>[!danger] Why is this definition???

Using the continuum-normalized rate and flux,

$$
\frac{d\sigma_{ba}}{d\Omega_b}
=
\frac{
\frac{2\pi}{\hbar}
\frac{\mu_b k_b}{\hbar^2}
|T_{ba}(\mathbf k_b,\mathbf k_a;E)|^2
}{
\frac{v_a}{(2\pi)^3}
}.
$$

Since $v_a=\hbar k_a/\mu_a$, this becomes

$$
\frac{d\sigma_{ba}}{d\Omega_b}
=
(2\pi)^4
\frac{\mu_a\mu_b}{\hbar^4}
\frac{k_b}{k_a}
|T_{ba}(\mathbf k_b,\mathbf k_a;E)|^2.
$$

Equivalently,

$$
\frac{d\sigma_{ba}}{d\Omega_b}
=
16\pi^4
\frac{\mu_a\mu_b}{\hbar^4}
\frac{k_b}{k_a}
|T_{ba}(\mathbf k_b,\mathbf k_a;E)|^2.
$$

This is the channel-resolved cross section written directly in terms of the continuum-normalized transition matrix.

---

## 8. Relation to the channel-resolved scattering amplitude

The [[Scattering Theory 3 - Channel-Resolved Scattering Amplitudes|previous note]] found the continuum-normalized relation

$$
f_{ba}(\mathbf k_b,\mathbf k_a;E)
=
-\frac{4\pi^2\mu_b}{\hbar^2}
T_{ba}(\mathbf k_b,\mathbf k_a;E).
$$

Therefore

$$
|f_{ba}(\mathbf k_b,\mathbf k_a;E)|^2
=
\frac{16\pi^4\mu_b^2}{\hbar^4}
|T_{ba}(\mathbf k_b,\mathbf k_a;E)|^2.
$$

Using

$$
\frac{v_b}{v_a}
=
\frac{\hbar k_b/\mu_b}{\hbar k_a/\mu_a}
=
\frac{\mu_a k_b}{\mu_b k_a},
$$

we obtain

$$
\frac{v_b}{v_a}|f_{ba}(\mathbf k_b,\mathbf k_a;E)|^2
=
16\pi^4
\frac{\mu_a\mu_b}{\hbar^4}
\frac{k_b}{k_a}
|T_{ba}(\mathbf k_b,\mathbf k_a;E)|^2.
$$

Thus the differential cross section may be written compactly as

$$
\boxed{
\frac{d\sigma_{ba}}{d\Omega_b}
=
\frac{v_b}{v_a}
|f_{ba}(\mathbf k_b,\mathbf k_a;E)|^2
}
$$

for open incoming channel $a$ and open outgoing channel $b$.

This velocity ratio is essential in multichannel scattering. The amplitude $f_{ba}$ is the outgoing wave amplitude in channel $b$, but the cross section compares outgoing transition rate to incoming flux in channel $a$. If the entrance and exit channels have different thresholds or reduced masses, the speeds generally differ.

Equivalently,

$$
\frac{v_b}{v_a}
=
\frac{\mu_a k_b}{\mu_b k_a}.
$$

If the reduced masses are the same in the two channels, this reduces to

$$
\frac{v_b}{v_a}
=
\frac{k_b}{k_a}.
$$

---

## 9. Interpretation of the velocity factor

The velocity factor has a simple origin.

The outgoing rate into channel $b$ contains the final density of states:

$$
\rho_b(E,\Omega_b)
=
\frac{\mu_b k_b}{\hbar^2}.
$$

The incident beam strength is measured by the incoming flux:

$$
j_a^{\mathrm{in}}
\propto
v_a
=
\frac{\hbar k_a}{\mu_a}.
$$

Combining these gives the factor

$$
\frac{\mu_b k_b}{\hbar^2}
\frac{1}{v_a}
=
\frac{\mu_a\mu_b}{\hbar^3}
\frac{k_b}{k_a}.
$$

After rewriting $T_{ba}$ in terms of $f_{ba}$, this same factor appears as $v_b/v_a$. Thus the velocity ratio is not an additional dynamical assumption. It is the kinematic conversion between final density of states and incident flux.

---

## 10. Closed channels and asymptotic cross sections

A final channel $b$ contributes to an asymptotic cross section only if it is open:

$$
E>\epsilon_b.
$$

Then $k_b$ is real, the asymptotic wave has the form

$$
\frac{e^{ik_b r}}{r},
$$

and it carries outgoing radial flux to infinity.

If instead

$$
E<\epsilon_b,
$$

then

$$
k_b=i\kappa_b,
\qquad
\kappa_b
=
\frac{\sqrt{2\mu_b(\epsilon_b-E)}}{\hbar}.
$$

The large-distance channel component is evanescent rather than oscillatory:

$$
\psi_b(\mathbf r)
\sim
C_b(\hat{\mathbf r};E)\frac{e^{-\kappa_b r}}{r}.
$$

This tail does not carry outgoing flux to infinity. Therefore a closed channel is not an asymptotic detector channel at that energy, and there is no differential cross section $d\sigma_{ba}/d\Omega_b$ for such a closed final channel.

However, closed channels must not be removed from the internal scattering dynamics. They can still appear as intermediate channels in the transition equation

$$
T(E)
=
V+VG_0^{(+)}(E)T(E).
$$

In momentum-channel components,

$$
T_{ba}(\mathbf k_b,\mathbf k_a;E)
=
V_{ba}(\mathbf k_b,\mathbf k_a)
+
\sum_c\int d^3q\,
V_{bc}(\mathbf k_b,\mathbf q)
\frac{1}{
E-\epsilon_c-\hbar^2q^2/(2\mu_c)+i0
}
T_{ca}(\mathbf q,\mathbf k_a;E).
$$

The external final channel $b$ must be open in order to define an asymptotic outgoing cross section. But the intermediate channel $c$ in the sum can be open or closed.

If $c$ is closed at energy $E$, the denominator has no real on-shell pole in $q$. Nevertheless, this virtual propagation can modify the open-channel transition amplitude. It can shift phases, change effective interactions, and produce resonant behavior when a closed-channel bound state lies near an open-channel threshold. This is the structural mechanism behind Feshbach resonances.

Thus:

$$
\text{closed channels do not carry asymptotic outgoing flux,}
$$

but

$$
\text{closed channels can strongly affect }T_{ba}(E)\text{ through virtual propagation.}
$$

---

## 11. Single-channel elastic limit

For one open channel with threshold $\epsilon=0$ and reduced mass $\mu$, the entrance and exit channels are the same:

$$
a=b.
$$

Elastic scattering conserves the magnitude of the relative momentum:

$$
k_b=k_a=k.
$$

The incoming and outgoing speeds are equal:

$$
v_b=v_a.
$$

Therefore the multichannel expression reduces to

$$
\frac{d\sigma}{d\Omega}
=
|f(\mathbf k',\mathbf k;E)|^2.
$$

This is Sakurai's familiar single-channel elastic result. The simplicity of this formula is special: it relies on having the same channel, the same reduced mass, and the same incoming and outgoing speed. In multichannel scattering, the more general formula is

$$
\frac{d\sigma_{ba}}{d\Omega_b}
=
\frac{v_b}{v_a}
|f_{ba}(\mathbf k_b,\mathbf k_a;E)|^2.
$$

---

## 12. Logical summary

For physical wave packets, transition probabilities are computed from

$$
P_{h_b\leftarrow g_a}
=
|\langle h_b|S|g_a\rangle|^2.
$$

For sharp channel labels, the scattering part of the $S$ matrix is written

$$
S_{ba}(\mathbf k_b,\mathbf k_a)
=
\delta_{ba}\delta^{(3)}(\mathbf k_b-\mathbf k_a)
-
2\pi i\,
\delta(E_b(\mathbf k_b)-E_a(\mathbf k_a))
T_{ba}(\mathbf k_b,\mathbf k_a;E_a).
$$

The corresponding golden-rule transition rate density is

$$
dW_{ba}
=
\frac{2\pi}{\hbar}
|T_{ba}(\mathbf k_b,\mathbf k_a;E)|^2
\delta(E_b(\mathbf k_b)-E)
d^3k_b.
$$

For an open final channel,

$$
\rho_b(E,\Omega_b)
=
\frac{\mu_b k_b}{\hbar^2}.
$$

The incoming flux in channel $a$ is proportional to

$$
v_a
=
\frac{\hbar k_a}{\mu_a}.
$$

Therefore the channel-resolved differential cross section is

$$
\frac{d\sigma_{ba}}{d\Omega_b}
=
16\pi^4
\frac{\mu_a\mu_b}{\hbar^4}
\frac{k_b}{k_a}
|T_{ba}(\mathbf k_b,\mathbf k_a;E)|^2.
$$

Using

$$
f_{ba}
=
-\frac{4\pi^2\mu_b}{\hbar^2}T_{ba},
$$

this becomes

$$
\boxed{
\frac{d\sigma_{ba}}{d\Omega_b}
=
\frac{v_b}{v_a}
|f_{ba}(\mathbf k_b,\mathbf k_a;E)|^2
}
$$

with

$$
v_a=\frac{\hbar k_a}{\mu_a},
\qquad
v_b=\frac{\hbar k_b}{\mu_b}.
$$

Only open channels appear as asymptotic final cross-section channels. Closed channels have exponentially decaying asymptotic components and carry no outgoing flux to infinity, but they remain present inside the transition operator and can affect open-channel scattering through virtual propagation.

In the single-channel elastic limit, $v_b=v_a$, and the formula reduces to

$$
\frac{d\sigma}{d\Omega}
=
|f(\mathbf k',\mathbf k)|^2.
$$