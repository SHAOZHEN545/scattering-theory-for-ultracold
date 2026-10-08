The previous notes separated three layers of notation:

1. the abstract scattering objects $S$, $T(E)$, $G_0^{(+)}(E)$, and $|\psi_\alpha^{(+)}\rangle$;
2. the spatial bases $|\mathbf r\rangle$ and $|\mathbf k\rangle$;
3. the asymptotic channel labels $a,b,c,\ldots$ that carry thresholds, reduced masses, internal quantum numbers, and arrangement information.

This note uses the coordinate-space logic of Sakurai's discussion of the scattering amplitude, but keeps the channel labels explicit throughout. The main result is that the channel-resolved scattering amplitude $f_{ba}$ is not a new fundamental dynamical object. It is the coefficient of the outgoing large-distance coordinate-space wave in channel $b$, and that coefficient is just the on-shell transition matrix element written in the coordinate representation.

---

## 1. Setup and notation

Let the incoming asymptotic channel be $a$, with incident relative momentum $\mathbf k_a$. The total energy is

$$
E
=
\epsilon_a+\frac{\hbar^2 k_a^2}{2\mu_a}.
$$

The corresponding outgoing scattering vector is

$$
|\psi_{\mathbf k_a a}^{(+)}\rangle
=
|\mathbf k_a,a\rangle
+
G_0^{(+)}(E)V|\psi_{\mathbf k_a a}^{(+)}\rangle.
$$

Projecting this state onto the coordinate-channel basis defines its $b$th coordinate-space component:

$$
\psi_{ba}^{(+)}(\mathbf r;\mathbf k_a)
\equiv
\langle \mathbf r,b|\psi_{\mathbf k_a a}^{(+)}\rangle.
$$

The first subscript $b$ labels the observed coordinate-space component. The second subscript $a$ records the prepared incoming channel. Thus $\psi_{ba}^{(+)}$ should be read as:

$$
\text{component in channel } b
\quad
\text{of the exact outgoing state prepared from channel } a.
$$

The free incoming plane wave appears only when the observed component is the prepared channel. With the continuum normalization used in the previous note,

$$
\langle \mathbf r,b|\mathbf k,a\rangle
=
\delta_{ba}\frac{1}{(2\pi)^{3/2}}e^{i\mathbf k\cdot\mathbf r}.
$$

---

## 2. Coordinate-space projection of the Lippmann--Schwinger equation

Start with

$$
|\psi_{\mathbf k_a a}^{(+)}\rangle
=
|\mathbf k_a,a\rangle
+
G_0^{(+)}(E)V|\psi_{\mathbf k_a a}^{(+)}\rangle.
$$

Multiply by $\langle \mathbf r,b|$ and insert coordinate-channel completeness twice around $V$:

$$
1
=
\sum_c\int d^3r'\,|\mathbf r',c\rangle\langle \mathbf r',c|.
$$

Since $H_0$ is diagonal in the channel label, the free resolvent is also diagonal in the channel label:

$$
\langle \mathbf r,b|G_0^{(+)}(E)|\mathbf r',c\rangle
=
\delta_{bc}G_{0,b}^{(+)}(E;\mathbf r,\mathbf r').
$$

Therefore

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

This is the channel-resolved coordinate-space Lippmann--Schwinger equation.

For a local coupled-channel interaction,

$$
V_{bc}(\mathbf r',\mathbf r'')
=
V_{bc}(\mathbf r')\delta^{(3)}(\mathbf r'-\mathbf r''),
$$

the same equation becomes

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

The index structure is important. The interaction first gathers amplitude from all intermediate components $c$ into channel $b$ through $V_{bc}$; after that last interaction, the free Green's function $G_{0,b}^{(+)}$ propagates the amplitude outward in channel $b$.

---

## 3. The outgoing free Green's function in a channel

The channel-$b$ free Green's function is

$$
G_{0,b}^{(+)}(E;\mathbf r,\mathbf r')
=
\int \frac{d^3q}{(2\pi)^3}\,
\frac{e^{i\mathbf q\cdot(\mathbf r-\mathbf r')}}
{E-\epsilon_b-\hbar^2q^2/(2\mu_b)+i0}.
$$

At fixed total energy $E$, channel $b$ is open if $E>\epsilon_b$. Then

$$
k_b(E)
=
\frac{\sqrt{2\mu_b(E-\epsilon_b)}}{\hbar}
$$

is real, and the denominator may be written as

$$
E-\epsilon_b-\frac{\hbar^2q^2}{2\mu_b}+i0
=
\frac{\hbar^2}{2\mu_b}
\left(k_b^2-q^2+i0\right).
$$

The usual contour evaluation gives

$$
G_{0,b}^{(+)}(E;\mathbf r,\mathbf r')
=
-\frac{2\mu_b}{\hbar^2}
\frac{e^{ik_b|\mathbf r-\mathbf r'|}}
{4\pi|\mathbf r-\mathbf r'|}
\qquad
(E>\epsilon_b).
$$

This is the outgoing Helmholtz Green's function in channel $b$. The corresponding incoming Green's function would contain $e^{-ik_b|\mathbf r-\mathbf r'|}$.

The sign $+i0$ is therefore not a decorative convention. It is the boundary prescription that selects the outgoing spherical wave in the coordinate representation. In the time-domain form,

$$
G_0^{(+)}(E)
=
-\frac{i}{\hbar}
\lim_{\eta\downarrow 0}
\int_0^\infty d\tau\,
e^{i(E-H_0)\tau/\hbar}e^{-\eta\tau/\hbar}.
$$

The integral runs over positive time intervals after an interaction. Thus $G_0^{(+)}$ describes free propagation forward away from the last interaction event. In coordinate space, that forward propagation becomes the outgoing factor $e^{ik_bR}/R$, with $R=|\mathbf r-\mathbf r'|$.

For a closed channel, $E<\epsilon_b$, define

$$
\kappa_b(E)
=
\frac{\sqrt{2\mu_b(\epsilon_b-E)}}{\hbar}.
$$

Then $k_b=i\kappa_b$, and the same kernel is analytically continued to

$$
G_{0,b}^{(+)}(E;\mathbf r,\mathbf r')
=
-\frac{2\mu_b}{\hbar^2}
\frac{e^{-\kappa_b|\mathbf r-\mathbf r'|}}
{4\pi|\mathbf r-\mathbf r'|}
\qquad
(E<\epsilon_b),
$$

away from the singular point $\mathbf r=\mathbf r'$. A closed channel therefore produces an evanescent tail rather than an outgoing flux-carrying wave.

---

## 4. Large-distance form in an open final channel

Assume the interaction is finite range, or at least short range enough that the integral is dominated by $|\mathbf r'|$ much smaller than the observation distance $r=|\mathbf r|$. For an open final channel $b$,

$$
|\mathbf r-\mathbf r'|
=
r-\hat{\mathbf r}\cdot\mathbf r'
+
O(r^{-1}),
$$

so

$$
\frac{e^{ik_b|\mathbf r-\mathbf r'|}}{|\mathbf r-\mathbf r'|}
\sim
\frac{e^{ik_b r}}{r}
e^{-ik_b\hat{\mathbf r}\cdot\mathbf r'}.
$$

Define the outgoing on-shell momentum in channel $b$ by

$$
\mathbf k_b
=
k_b\hat{\mathbf r},
\qquad
E
=
\epsilon_b+\frac{\hbar^2k_b^2}{2\mu_b}.
$$

Substituting the large-$r$ Green's function into the projected Lippmann--Schwinger equation gives

$$
\psi_{ba}^{(+)}(\mathbf r;\mathbf k_a)
\underset{r\to\infty}{\sim}
\delta_{ba}\frac{1}{(2\pi)^{3/2}}e^{i\mathbf k_a\cdot\mathbf r}
-
\frac{2\mu_b}{\hbar^2}
\frac{e^{ik_b r}}{4\pi r}
\sum_c\int d^3r'\int d^3r''\,
e^{-i\mathbf k_b\cdot\mathbf r'}
V_{bc}(\mathbf r',\mathbf r'')
\psi_{ca}^{(+)}(\mathbf r'';\mathbf k_a).
$$

It is conventional to write this as

$$
\psi_{ba}^{(+)}(\mathbf r;\mathbf k_a)
\underset{r\to\infty}{\sim}
\frac{1}{(2\pi)^{3/2}}
\left[
\delta_{ba}e^{i\mathbf k_a\cdot\mathbf r}
+
f_{ba}(\mathbf k_b,\mathbf k_a;E)
\frac{e^{ik_b r}}{r}
\right],
\qquad
E>\epsilon_b.
$$

This equation defines the channel-resolved scattering amplitude $f_{ba}$. It is the coefficient of the outgoing spherical wave in the $b$th coordinate-space component of the exact scattering state prepared in channel $a$.

The incident term is diagonal in channel space because the source prepared only channel $a$. The outgoing scattered term need not be diagonal: the interaction can produce outgoing flux in any open final channel $b$.

---

## 5. Definition of the channel-resolved scattering amplitude

Comparing the two large-distance expressions gives

$$
f_{ba}(\mathbf k_b,\mathbf k_a;E)
=
-\frac{2\mu_b}{\hbar^2}
\frac{(2\pi)^{3/2}}{4\pi}
\sum_c\int d^3r'\int d^3r''\,
e^{-i\mathbf k_b\cdot\mathbf r'}
V_{bc}(\mathbf r',\mathbf r'')
\psi_{ca}^{(+)}(\mathbf r'';\mathbf k_a),
$$

where the final momentum is on shell:

$$
|\mathbf k_b|
=
\frac{\sqrt{2\mu_b(E-\epsilon_b)}}{\hbar}.
$$

For a local coupled-channel potential, this reduces to

$$
f_{ba}(\mathbf k_b,\mathbf k_a;E)
=
-\frac{2\mu_b}{\hbar^2}
\frac{(2\pi)^{3/2}}{4\pi}
\sum_c\int d^3r'\,
e^{-i\mathbf k_b\cdot\mathbf r'}
V_{bc}(\mathbf r')
\psi_{ca}^{(+)}(\mathbf r';\mathbf k_a).
$$

This formula looks like a new definition, but conceptually it is only a representation statement. The amplitude $f_{ba}$ is what the exact scattering vector looks like far away in the coordinate representation. Its dynamical content is already contained in $T(E)$, or equivalently in $V|\psi_{\mathbf k_a a}^{(+)}\rangle$.

---

## 6. Relation to the on-shell transition matrix

The channel-resolved transition matrix element is

$$
T_{ba}(\mathbf k_b,\mathbf k_a;E)
=
\langle \mathbf k_b,b|T(E)|\mathbf k_a,a\rangle.
$$

Since

$$
T(E)|\mathbf k_a,a\rangle
=
V|\psi_{\mathbf k_a a}^{(+)}\rangle,
$$

we have

$$
T_{ba}(\mathbf k_b,\mathbf k_a;E)
=
\langle \mathbf k_b,b|V|\psi_{\mathbf k_a a}^{(+)}\rangle.
$$

In coordinate representation,

$$
T_{ba}(\mathbf k_b,\mathbf k_a;E)
=
\sum_c\int d^3r'\int d^3r''\,
\frac{e^{-i\mathbf k_b\cdot\mathbf r'}}{(2\pi)^{3/2}}
V_{bc}(\mathbf r',\mathbf r'')
\psi_{ca}^{(+)}(\mathbf r'';\mathbf k_a).
$$

Comparing this with the definition of $f_{ba}$ gives the continuum-normalized relation

$$
f_{ba}(\mathbf k_b,\mathbf k_a;E)
=
-\frac{4\pi^2\mu_b}{\hbar^2}
T_{ba}(\mathbf k_b,\mathbf k_a;E),
$$

with both external momenta on shell:

$$
E
=
\epsilon_a+\frac{\hbar^2k_a^2}{2\mu_a}
=
\epsilon_b+\frac{\hbar^2k_b^2}{2\mu_b}.
$$

The factor $\mu_b$ appears because $f_{ba}$ is defined as the coefficient of the outgoing coordinate-space Green's function in the final channel $b$. Flux ratios enter when this amplitude is converted into a cross section. With this normalization,

$$
\frac{d\sigma_{a\to b}}{d\Omega_b}
=
\frac{v_b}{v_a}
|f_{ba}(\mathbf k_b,\mathbf k_a;E)|^2,
\qquad
v_a=\frac{\hbar k_a}{\mu_a},
\qquad
v_b=\frac{\hbar k_b}{\mu_b},
$$

for open incoming and outgoing channels. The single-channel elastic formula $d\sigma/d\Omega=|f|^2$ is the special case $v_b=v_a$.

Thus $f_{ba}$ is not more fundamental than $T_{ba}$. The operator $T(E)$ is the reduced transition operator. The amplitude $f_{ba}$ is its far-field coordinate-space representative, after choosing plane-wave normalization and a final open channel.

---

## 7. Open final channels versus closed components

The large-distance amplitude $f_{ba}$ is a physical outgoing scattering amplitude only when the final channel $b$ is open:

$$
E>\epsilon_b.
$$

Then $k_b$ is real, the outgoing factor $e^{ik_b r}/r$ carries radial probability flux, and channel $b$ can be an asymptotic detector channel.

If instead

$$
E<\epsilon_b,
$$

then $k_b=i\kappa_b$, and the asymptotic kernel is exponentially decaying:

$$
G_{0,b}^{(+)}(E;\mathbf{r},\mathbf{r}')
\sim
-\frac{2\mu_b}{\hbar^2}
\frac{e^{-\kappa_b r}}{4\pi r}
e^{+\kappa_b\hat{\mathbf{r}}\cdot\mathbf{r}'},\quad r \to \infty, \boldsymbol{r}' \,\text{fixed in the interaction region}
$$

>[!danger] This form is a little surprising at first glance but is totally correct.
>The $e^{+\kappa_b\hat{\mathbf r}\cdot\mathbf r'}$ exponential factor won't blow up because $\boldsymbol r'$ is limited in the small interaction region.

The corresponding component has the schematic asymptotic form

$$
\psi_{ba}^{(+)}(\mathbf r;\mathbf k_a)
\sim
C_{ba}(\hat{\mathbf r};E)
\frac{e^{-\kappa_b r}}{r},
\qquad
E<\epsilon_b,
$$

for some coefficient $C_{ba}$ determined by the same coupled-channel dynamics. This tail does not carry outgoing flux to infinity, so it is not assigned a physical detector amplitude $f_{ba}$ at that energy.

This does not mean the closed channel is irrelevant. Closed components still appear inside the coupled Lippmann--Schwinger equation, and closed channels still contribute to the transition operator through virtual propagation. They can modify open-channel phase shifts, generate effective open-channel interactions, and produce resonance behavior when a closed-channel bound state lies near an open-channel threshold.

The distinction is therefore:

$$
\text{open final channel}
\quad
\Longrightarrow
\quad
\text{oscillatory outgoing wave and asymptotic flux},
$$

whereas

$$
\text{closed channel component}
\quad
\Longrightarrow
\quad
\text{evanescent tail and no asymptotic flux}.
$$

---

## 8. What has and has not been introduced

The logic can be summarized in one chain:

$$
|\psi_{\mathbf k_a a}^{(+)}\rangle
=
|\mathbf k_a,a\rangle
+
G_0^{(+)}(E)V|\psi_{\mathbf k_a a}^{(+)}\rangle
$$

implies, after coordinate projection,

$$
\psi_{ba}^{(+)}
=
\text{incident component}
+
\text{free outgoing propagation in channel } b
\text{ after the last interaction}.
$$

For an open final channel, the outgoing Green's function has the large-distance behavior

$$
G_{0,b}^{(+)}
\sim
-\frac{2\mu_b}{\hbar^2}\frac{e^{ik_b r}}{4\pi r}
e^{-i\mathbf k_b\cdot\mathbf r'}.
$$

Therefore the $b$th coordinate component has the large-distance form

$$
\psi_{ba}^{(+)}(\mathbf r;\mathbf k_a)
\sim
\frac{1}{(2\pi)^{3/2}}
\left[
\delta_{ba}e^{i\mathbf k_a\cdot\mathbf r}
+
f_{ba}(\mathbf k_b,\mathbf k_a;E)\frac{e^{ik_b r}}{r}
\right].
$$

The coefficient is

$$
f_{ba}(\mathbf k_b,\mathbf k_a;E)
=
-\frac{4\pi^2\mu_b}{\hbar^2}
\langle \mathbf k_b,b|T(E)|\mathbf k_a,a\rangle_{\mathrm{on\ shell}}.
$$

Thus no new dynamics has been added. The scattering amplitude is the same transition operator viewed from far away in coordinate space.

---

## 9. Single-channel limit and Sakurai's notation

Now suppose there is only one channel. Drop $a,b,c$, set the threshold to zero, and write the reduced mass as $m$. The total energy is

$$
E=\frac{\hbar^2k^2}{2m}.
$$

The coordinate-space Lippmann--Schwinger equation becomes

$$
\psi_{\mathbf k}^{(+)}(\mathbf r)
=
\frac{1}{(2\pi)^{3/2}}e^{i\mathbf k\cdot\mathbf r}
+
\int d^3r'\,
G_0^{(+)}(E;\mathbf r,\mathbf r')
V(\mathbf r')
\psi_{\mathbf k}^{(+)}(\mathbf r').
$$

For large $r$,

$$
\psi_{\mathbf k}^{(+)}(\mathbf r)
\sim
\frac{1}{(2\pi)^{3/2}}
\left[
e^{i\mathbf k\cdot\mathbf r}
+
f(\mathbf k',\mathbf k)
\frac{e^{ikr}}{r}
\right],
\qquad
\mathbf k'=k\hat{\mathbf r}.
$$

The channel-resolved formula collapses to

$$
f(\mathbf k',\mathbf k)
=
-\frac{4\pi^2m}{\hbar^2}
\langle \mathbf k'|T(E)|\mathbf k\rangle
=
-\frac{4\pi^2m}{\hbar^2}
\langle \mathbf k'|V|\psi_{\mathbf k}^{(+)}\rangle.
$$

This is the continuum-normalized version of Sakurai's result. If one instead uses Sakurai's box-normalized plane waves,

$$
\langle \mathbf x|\mathbf k\rangle
=
\frac{1}{L^{3/2}}e^{i\mathbf k\cdot\mathbf x},
$$

the same statement is written as

$$
\langle \mathbf x|\psi^{(+)}\rangle
\underset{r\to\infty}{\sim}
\frac{1}{L^{3/2}}
\left[
e^{i\mathbf k\cdot\mathbf x}
+
f(\mathbf k',\mathbf k)\frac{e^{ikr}}{r}
\right],
$$

with

$$
f(\mathbf k',\mathbf k)
=
-\frac{mL^3}{2\pi\hbar^2}
\langle \mathbf k'|V|\psi^{(+)}\rangle.
$$

Thus Sakurai's $f(\mathbf k',\mathbf k)$ is the one-channel version of $f_{ba}(\mathbf k_b,\mathbf k_a;E)$. The compact single-channel notation hides the facts that, in general, the outgoing component has a channel label $b$, the incident preparation has a channel label $a$, each channel has its own threshold and reduced mass, and only open final channels carry asymptotic outgoing flux.
