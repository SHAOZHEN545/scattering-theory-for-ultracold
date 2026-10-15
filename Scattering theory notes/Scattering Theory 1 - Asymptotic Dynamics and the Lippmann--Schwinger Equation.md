[[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering|Scattering Theory 0]] solved one problem, the delta barrier, and met along the way the most important ideas this note needs: packets named by labels, a laboratory amplitude with free evolutions at both ends, an interaction-picture state that moves only during the collision, and an $S$ operator that connects only equal energies. 

Here we write the same story for a generic $H=H_0+V$, without relying on a single incident plane wave plus an outgoing scattered wave. The basic objects are reference asymptotic states, the interaction-picture comparison, the state prepared in the remote past, and the transition operator. Coordinate-space amplitudes, partial waves, and cross sections come later, as representations of them.

The guiding experiment is always the same:

$$
\begin{gather*}
\text{prepare separated fragments in an incoming asymptotic state} \\
\downarrow \\
\text{let the exact Hamiltonian act} \\
\downarrow \\
\text{detect separated fragments in an outgoing asymptotic state}
\end{gather*}
$$

The formalism removes from this experiment the trivial motion that the fragments would have had even without the interaction. What remains is the nontrivial input-output map. Short calculations sit in collapsible boxes next to the step they justify. Longer discussions and proofs are in the [[Scattering Theory 1 Supplement - Proofs and Derivations|supplement]], organized by topic; pointers §S$n$ say where.

---

## 1. The two Hamiltonians

Let

$$
H=H_0+V.
$$

The exact Hamiltonian $H$ generates the true laboratory time evolution. The reference Hamiltonian $H_0$ generates the motion used to define asymptotic states. In the simplest elastic problem, we will have $H_0=\mathbf p^2/2m$. More generally, it retains the relative motion and internal dynamics of separated subsystems that persist when the scattering interaction is absent.

Write the generalized eigenvectors of $H_0$ as

$$
H_0|\alpha\rangle=E_\alpha|\alpha\rangle .
$$

The label $\alpha$ collects all the quantum numbers needed to specify one **reference asymptotic state** $|\alpha\rangle$: a momentum in the simplest problem, relative momenta and internal quantum numbers in general. We use the schematic notation

$$
1=\int d\alpha\,|\alpha\rangle\langle\alpha|,\qquad
\langle\beta|\alpha\rangle=\delta(\beta-\alpha),
$$

where $d\alpha$ denotes both sums over discrete labels and integrations over continuous ones, and $\delta(\beta-\alpha)$ the corresponding mixture of Kronecker and Dirac deltas.

The vectors $|\alpha\rangle$ are not exact states during the collision. An exact scattering state evolves under $H$ and is labelled by the reference state to which it is compared in the remote past or future: $\alpha$ for incoming data, $\beta$ for outgoing data. For the delta barrier these are the plane waves $|k\rangle$ and the eigenstates $\phi_k$ of [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#2. The stationary solution|Scattering Theory 0, §2]].

---

## 2. The laboratory amplitude and the interaction picture

Represent the source's preparation and the state a detector accepts by normalizable reference packets

$$
|g\rangle=\int d\alpha\,g(\alpha)|\alpha\rangle ,\qquad
|h\rangle=\int d\beta\,h(\beta)|\beta\rangle .
$$

These are **labels** of free motions, not states at $t=0$. The packet $|g\rangle$ names the incoming free motion $e^{-iH_0t/\hbar}|g\rangle$ by its value at the reference time $t=0$. The state prepared at $t_i$ is $e^{-iH_0t_i/\hbar}|g\rangle$, and the detector accepts $e^{-iH_0t_f/\hbar}|h\rangle$ at $t_f$. As $t_i\to-\infty$ the prepared state runs off, but its label does not change. Why packets are named this way, and why the real system at $t=0$ looks nothing like $|g\rangle$, is the subject of [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#4. Wave packets, and how to name them|Scattering Theory 0, §4]].

The laboratory amplitude is prepare, evolve, project:

$$
\mathcal A_{hg}(t_f,t_i)
=
\langle h|e^{iH_0t_f/\hbar}
e^{-iH(t_f-t_i)/\hbar}
e^{-iH_0t_i/\hbar}|g\rangle .
$$
^eq-lab-amplitude

If $V=0$ the free factors cancel and $\mathcal A_{hg}=\langle h|g\rangle$; the interaction changes this input-output overlap. The operator in the middle is the interaction-picture evolution operator,

$$
U_I(t_f,t_i)
=
e^{iH_0t_f/\hbar}
e^{-iH(t_f-t_i)/\hbar}
e^{-iH_0t_i/\hbar}.
$$
^eq-ui-def

Passing to the interaction picture is a unitary change of picture, $|\psi_I(t)\rangle=e^{iH_0t/\hbar}|\psi(t)\rangle$, and can be read as a frame co-moving with the free motion. Like every change of picture, it changes no amplitude: $U_I$ is the laboratory amplitude written after factoring out the known reference motion at the preparation and detection ends. $U_I(t,t_i)|g\rangle$ is the label of the free motion the system would follow if $V$ were switched off at time $t$, and scattering is the change of this label during the collision; see [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#7.2 The interaction picture follows the label|Scattering Theory 0, §7.2]].

The label moves only through the interaction:

$$
i\hbar\frac{\partial}{\partial t}U_I(t,t_i)
=
V_I(t)U_I(t,t_i),
\qquad
V_I(t)=e^{iH_0t/\hbar}Ve^{-iH_0t/\hbar},
$$
^eq-ui-differential

or equivalently

$$
U_I(t,t_i)
=
1-\frac{i}{\hbar}\int_{t_i}^{t}dt'\,V_I(t')U_I(t',t_i).
$$
^eq-ui-integral

Between reference states, with $A_{\beta\alpha}(t,t_i)=\langle\beta|U_I(t,t_i)|\alpha\rangle$ and $V_{\beta\gamma}=\langle\beta|V|\gamma\rangle$,

$$
A_{\beta\alpha}(t,t_i)
=
\delta(\beta-\alpha)
-\frac{i}{\hbar}\int_{t_i}^{t}dt'\int d\gamma\,
V_{\beta\gamma}
e^{i(E_\beta-E_\gamma)t'/\hbar}
A_{\gamma\alpha}(t',t_i).
$$
^eq-eom-matrix

This is the time-dependent starting point. The transition amplitude between asymptotic states is built from insertions of $V$, and $H_0$ contributes only relative phases between them. For continuum labels the kernel is distribution-valued; physical amplitudes are obtained after smearing it with packets $g$ and $h$.

---

## 3. The $S$ operator and energy conservation

A scattering experiment never looks at the system during the collision. The source prepares a packet long before, the detector examines it long after, and all we can ask is how the one compares with the other. So we let the two times run off to infinity and define the $S$ operator:

$$
S_{\beta\alpha}
=
\langle\beta|S|\alpha\rangle
=
\lim_{t_f\to+\infty,\;t_i\to-\infty}
\langle\beta|U_I(t_f,t_i)|\alpha\rangle .
$$
^eq-s-def

The limit is meant on wave packets, and whether it really exists is a question we postpone to §6. The identity part of $S$ describes the part of the packet that passes through with its label unchanged. Everything else is what the interaction did.

What can we say about $S$ before calculating anything? One thing follows from symmetry alone. Neither $H$ nor $H_0$ depends on time, so if we delay the whole experiment by a time $a$, preparation, collision and detection together, nothing physical can change. Shifting both times by $a$ in the definition of $U_I$ gives

$$
U_I(t_f+a,t_i+a)=e^{iH_0a/\hbar}\,U_I(t_f,t_i)\,e^{-iH_0a/\hbar}.
$$
^eq-time-shift

Now let $t_i\to-\infty$ and $t_f\to+\infty$. A fixed delay does not change where the times end up, so both sides tend to the same limit,  

$$
S=e^{iH_0a/\hbar}Se^{-iH_0a/\hbar},
$$
^eq-s-time-shift

for every $a$. In other words $[S,H_0]=0$. The interaction can move the system between reference states, but only between states of the same energy. This is energy conservation, and it came from time-translation invariance, not from any calculation.

The commutator tells us where $S$ can be nonzero, but not what it is there. To see what sits on the energy shell, take the simplest approximation: replace $U_I$ by $1$ inside the [[#^eq-eom-matrix|equation of motion]], which keeps only the first term of the Dyson series. Then

$$
S^{(1)}_{\beta\alpha}
=
-\frac{i}{\hbar}
\int_{-\infty}^{+\infty}dt\,
e^{i(E_\beta-E_\alpha)t/\hbar}V_{\beta\alpha}
=
-2\pi i\,\delta(E_\beta-E_\alpha)V_{\beta\alpha}.
$$
^eq-s-first-order

The integral over the whole history produces the energy delta function, just as the commutator promised, and what remains in front of it is the matrix element of the interaction. It is natural to keep this form exactly, and to define the **transition amplitude** $T_{\beta\alpha}$ by

$$
S_{\beta\alpha}
=
\delta(\beta-\alpha)
-
2\pi i\,\delta(E_\beta-E_\alpha)T_{\beta\alpha}(E_\alpha).
$$
^eq-t-def

This is not an arbitrary convention. Energy conservation forces the delta function, and $T$ is simply whatever remains once the identity and that delta function are taken out. In the lowest approximation $T_{\beta\alpha}\simeq V_{\beta\alpha}$, the first Born approximation. For the delta barrier, the energy delta function says that the barrier radiates only at the energy that drives it ([[Scattering Theory 0 Supplement - Details of the Delta-Barrier Problem#S3.3 After the collision|ST0 Supplement, §S3.3]]).

So can we find $T$ exactly, beyond this first guess? Look again at where the first-order result came from. If we set $t=+\infty$ and $t_i=-\infty$ in the [[#^eq-eom-matrix|equation of motion]], we get, without any approximation,

$$
S_{\beta\alpha}
=
\delta(\beta-\alpha)
-\frac{i}{\hbar}\int_{-\infty}^{+\infty}dt\,
\langle\beta|V_I(t)\,U_I(t,-\infty)|\alpha\rangle .
$$
^eq-s-history

Read the integrand from right to left. $U_I(t,-\infty)|\alpha\rangle$ is the state, at time $t$, of a system that was prepared on the free motion $\alpha$ in the remote past. At each time $V$ acts on that state, and the results are added up over the whole history. The first Born approximation replaced this state by its label $|\alpha\rangle$, as if the interaction had not done anything yet. To get the exact $T$, then, we need to know the state prepared in the remote past. That is the subject of the next section.

---

## 4. The state prepared in the remote past

Let us give this state a name. Its value at the reference time $t=0$ is

$$
|\psi_\alpha^{(+)}\rangle=U_I(0,-\infty)|\alpha\rangle .
$$
^eq-psi-plus

In the picture of [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#7.4 The whole calculation in one picture|Scattering Theory 0, §7.4]], $U_I(t,-\infty)|\alpha\rangle$ is built like this: start on the incoming free line $\alpha$ in the remote past, let the exact $H$ act until $t$, switch $V$ off there, and name the free line the system continues on by its value at $t=0$. At $t=0$ itself the free factor $e^{iH_0t/\hbar}$ is one, so the label and the state coincide. $|\psi_\alpha^{(+)}\rangle$ is not a dashed extension but the real state at $t=0$, the point on the orange curve, of a system that came in on $\alpha$.

What does it look like at other times? We do not have to compute $U_I(t,-\infty)$ again for every $t$, because time-translation invariance helps a second time. Set $t_f=0$ and $a=t$ in the [[#^eq-time-shift|time-shift identity]], which gives $U_I(t,t_i+t)=e^{iH_0t/\hbar}U_I(0,t_i)e^{-iH_0t/\hbar}$. As $t_i\to-\infty$ the lower time $t_i+t$ goes there too. A preparation in the remote past is not moved by a finite delay, so

$$
U_I(t,-\infty)=e^{iH_0t/\hbar}\,U_I(0,-\infty)\,e^{-iH_0t/\hbar}.
$$

On $|\alpha\rangle$ the right-hand factor is just the phase $e^{-iE_\alpha t/\hbar}$, and in the reference basis

$$
\langle\gamma|U_I(t,-\infty)|\alpha\rangle
=
e^{i(E_\gamma-E_\alpha)t/\hbar}\,\langle\gamma|\psi_\alpha^{(+)}\rangle .
$$
^eq-free-phase

What does this mean in the laboratory? Undo the interaction picture by multiplying with $e^{-iH_0t/\hbar}$. This cancels the factor $e^{iH_0t/\hbar}$ on the left, and the actual state at time $t$ is

$$
|\psi(t)\rangle=e^{-iH_0t/\hbar}\,U_I(t,-\infty)|\alpha\rangle=e^{-iE_\alpha t/\hbar}|\psi_\alpha^{(+)}\rangle .
$$

The state at time $t$ is the state at $t=0$ times a phase: a stationary state. Is that reasonable? Remember that $|\alpha\rangle$ is a plane wave, a packet of infinite length. In [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#8.2 A long packet looks like a steady state|Scattering Theory 0, §8.2]] a long packet, seen at the barrier, was a stationary state switched on and off slowly by its envelope, with a long plateau in between where only a phase turns. For a plane wave prepared in the remote past the switching on has been pushed back to $t=-\infty$, so at every finite time we are already on the plateau.

A stationary state is an eigenvector. Put $e^{-iE_\alpha t/\hbar}|\psi_\alpha^{(+)}\rangle$ into the Schrödinger equation and the time derivative brings down $E_\alpha$:

$$
H|\psi_\alpha^{(+)}\rangle
=
E_\alpha|\psi_\alpha^{(+)}\rangle .
$$
^eq-eigen

So the state prepared in the remote past is a generalized eigenvector of $H$, at the energy it came in with. This cannot be the whole answer, though. Many eigenvectors of $H$ share the energy $E_\alpha$. For the delta barrier there are two, with the source on the left or on the right ([[Scattering Theory 0 Supplement - Details of the Delta-Barrier Problem#S4.1 Both families of eigenstates|ST0 Supplement, §S4.1]]). In three dimensions there is one for every direction of incidence. The eigenvalue equation has forgotten which free motion the state came in on, while the equation of motion still remembers it through its lower limit $t_i=-\infty$. So let us go back to the [[#^eq-eom-matrix|equation of motion]].

With $t_i=-\infty$ and the free-phase form inserted, the intermediate label drops out of the time integral, and the equation becomes

$$
\langle\beta|U_I(t,-\infty)|\alpha\rangle
=
\delta(\beta-\alpha)
-\frac{i}{\hbar}\left[\int_{-\infty}^{t}dt'\,e^{i(E_\beta-E_\alpha)t'/\hbar}\right]
\langle\beta|V|\psi_\alpha^{(+)}\rangle .
$$
^eq-eom-remote-past

The time integral that runs into the remote past now becomes an energy denominator. Both sides carry the same phase $e^{i(E_\beta-E_\alpha)t/\hbar}$, it cancels, and the time drops out altogether:

$$
\langle\beta|\psi_\alpha^{(+)}\rangle
=
\delta(\beta-\alpha)
+
\frac{1}{E_\alpha-E_\beta+i0}\,\langle\beta|V|\psi_\alpha^{(+)}\rangle .
$$
^eq-ls-matrix

> [!info]- Derivation: from the equation of motion to the energy denominator
> With $t_i=-\infty$ the [[#^eq-eom-matrix|equation of motion]] contains $\langle\gamma|U_I(t',-\infty)|\alpha\rangle$, which by the [[#^eq-free-phase|free-phase form]] is $e^{i(E_\gamma-E_\alpha)t'/\hbar}\langle\gamma|\psi_\alpha^{(+)}\rangle$. Its phase combines with the phase of $V_I(t')$,
> $$
> e^{i(E_\beta-E_\gamma)t'/\hbar}\,e^{i(E_\gamma-E_\alpha)t'/\hbar}=e^{i(E_\beta-E_\alpha)t'/\hbar},
> $$
> which no longer depends on $\gamma$. The $\gamma$ integral then acts only on $V_{\beta\gamma}\langle\gamma|\psi_\alpha^{(+)}\rangle$, and completeness collapses it to $\langle\beta|V|\psi_\alpha^{(+)}\rangle$. This is the [[#^eq-eom-remote-past|time-dependent form]].
>
> The remaining integral does not converge at $t'\to-\infty$ on its own. Damp it with $e^{\eta t'/\hbar}$ and let $\eta\downarrow0$ at the end. The damping has to switch off the remote past, so $\eta>0$, and
> $$
> -\frac{i}{\hbar}\int_{-\infty}^{t}dt'\,e^{[i(E_\beta-E_\alpha)+\eta]t'/\hbar}
> =
> \frac{e^{[i(E_\beta-E_\alpha)+\eta]t/\hbar}}{E_\alpha-E_\beta+i\eta}
> \;\longrightarrow\;
> \frac{e^{i(E_\beta-E_\alpha)t/\hbar}}{E_\alpha-E_\beta+i0}.
> $$
> By the free-phase form the left side is $e^{i(E_\beta-E_\alpha)t/\hbar}\langle\beta|\psi_\alpha^{(+)}\rangle$. The term $\delta(\beta-\alpha)$ can carry the same phase at no cost, because it forces $E_\beta=E_\alpha$. Dividing by the phase gives the [[#^eq-ls-matrix|time-independent form]].

The factor $1/(E_\alpha-E_\beta+i0)$ depends on $\beta$ only through its energy, so it is the matrix element of a function of $H_0$. That function is the **free resolvent**

$$
G_0^{(+)}(E)=\frac{1}{E-H_0+i0},
$$
^eq-free-resolvent

and in operator form our equation becomes the **Lippmann–Schwinger equation**

$$
|\psi_\alpha^{(+)}\rangle
=
|\alpha\rangle
+
G_0^{(+)}(E_\alpha)V|\psi_\alpha^{(+)}\rangle .
$$
^eq-lippmann-schwinger

> [!question]- What does the $+i0$ mean?
> It is what is left of the lower limit $t_i=-\infty$. The time integral into the past converges only with a damping that switches off the remote past, so its sign is fixed, not chosen, and the damping is not an extra assumption: it is what the limit $t_i\to-\infty$ produces on its own. Read in the time elapsed since an interaction, $G_0^{(+)}$ is the Fourier transform of the retarded free propagator. The scattered part of the state is built only from interactions at earlier times, the causality of [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#6.1 Where the scattered wave comes from|Scattering Theory 0, §6.1]], and in coordinate space this is what picks out the outgoing wave. The familiar $1/(x\pm i0)=\operatorname{P}(1/x)\mp i\pi\delta(x)$ is a consequence of the prescription, not its meaning. The full story is in §S1.

So the Lippmann–Schwinger equation is not a new postulate. It is the equation of motion itself, for a state prepared in the remote past. The time integral $\int_{-\infty}^{t}dt'$ has turned into $G_0^{(+)}$. On the right, $|\alpha\rangle$ is what came in, and $G_0^{(+)}V|\psi_\alpha^{(+)}\rangle$ is everything the interaction has produced from it.

It still contains the eigenvalue equation. Apply $E_\alpha-H_0$ to both sides; since $(E-H_0)G_0^{(+)}(E)=1$, the [[#^eq-eigen|eigenvalue equation]] comes back. What the Lippmann–Schwinger equation adds is the $+i0$, the record that the state came in on the free motion $\alpha$, and that is what selects one eigenvector among the many at $E_\alpha$. For the delta barrier it is exactly the eigenstate $\phi_k$ we started from ([[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#8.3 A division of labour|Scattering Theory 0, §8.3]]).

> [!question]- Does the "+" mean "incoming"?
> Not literally. A state prepared in the remote past and allowed to scatter forward in time is represented by a $+$ scattering vector. That vector has an incoming free asymptote in the past and outgoing scattered behaviour in the future. The $+i0$ is the analytic trace of that forward-in-time construction.

---

## 5. The transition operator

Now that we have the state, let us return to $T$. Go back to the [[#^eq-eom-remote-past|time-dependent form]] of §4, before we cancelled the phase, and this time let $t\to+\infty$. The left side becomes $S_{\beta\alpha}$, and the time integral now runs over the whole line and gives $2\pi\hbar\,\delta(E_\beta-E_\alpha)$. This is the [[#^eq-s-history|exact formula]] at the end of §3, with the state now known:

$$
S_{\beta\alpha}
=
\delta(\beta-\alpha)
-
2\pi i\,\delta(E_\beta-E_\alpha)\langle\beta|V|\psi_\alpha^{(+)}\rangle ,
\qquad\text{so}\qquad
T_{\beta\alpha}(E_\alpha)
=
\langle\beta|V|\psi_\alpha^{(+)}\rangle .
$$
^eq-t-from-state

Notice what this formula contains: one reference vector and one exact vector. The whole history of the interaction is stored in $|\psi_\alpha^{(+)}\rangle$, and the detector contributes only its label $\langle\beta|$.

Can we turn this into an equation for $T$ itself, without the state? Multiply the [[#^eq-lippmann-schwinger|Lippmann–Schwinger equation]] by $V$:

$$
V|\psi_\alpha^{(+)}\rangle
=
V|\alpha\rangle
+
VG_0^{(+)}(E_\alpha)\,V|\psi_\alpha^{(+)}\rangle .
$$

The vector $V|\psi_\alpha^{(+)}\rangle=T(E_\alpha)|\alpha\rangle$ appears on both sides, so this is an equation for it alone. As an operator equation,

$$
T(E)=V+VG_0^{(+)}(E)T(E),
\qquad
T_{\beta\alpha}(E)
=
V_{\beta\alpha}
+
\int d\gamma\,
V_{\beta\gamma}
\frac{1}{E-E_\gamma+i0}
T_{\gamma\alpha}(E).
$$
^eq-t-equation

This is the self-referential structure of §2, handed on from the state to $T$. In the equation of motion, the amplitude at time $t$ was $V$ acting on the amplitude built up at earlier times. Here, a transition from $\alpha$ to $\beta$ either happens in a single interaction $V_{\beta\alpha}$, or the system first goes all the way from $\alpha$ to some intermediate reference state $\gamma$, with the full amplitude $T_{\gamma\alpha}$, and one more interaction then takes it to $\beta$. Where the equation of motion said "at earlier times", this one says $G_0^{(+)}$.

Why do we give $T$ a free energy argument, when $S$ needs only the on-shell values $T_{\beta\alpha}(E_\alpha)$ with $E_\beta=E_\alpha$? Because the equation needs more. Inside the integral, $T_{\gamma\alpha}(E)$ appears with intermediate states $\gamma$ of any energy, so $T(E)$ has to be an operator defined for every $E$.

Iterating the equation gives the **Born series**

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
^eq-born-series

This is the Dyson series in a different arrangement: each time interval between two successive interactions propagates one intermediate state and gives one energy denominator, always measured from the total energy (§S2.3). The equation is more useful than the series, though. It still makes sense when the series diverges, as it does for interactions strong enough to bind, and it has a closed solution in terms of the full resolvent $G^{(+)}(E)=(E-H+i0)^{-1}$ (§S2.2):

$$
T(E)=V+VG^{(+)}(E)V .
$$
^eq-t-closed

Once the identity and energy conservation have been taken out of $S$, everything that is left to compute is in $T$.

---

## 6. The remote future, and the Møller operators

### 6.1 Both ends

So far everything has been built around the preparation in the remote past. What about the detector? Detection is the mirror image of preparation. The exact state at $t=0$ that will leave on the free motion $\beta$ is

$$
|\psi_\beta^{(-)}\rangle=U_I(0,+\infty)|\beta\rangle ,
$$

and the steps of §4, with the time integral now running forward into the remote future, give the same equation with the opposite sign of $i0$ (§S1.4):

$$
|\psi_\beta^{(-)}\rangle
=
|\beta\rangle
+
G_0^{(-)}(E_\beta)V|\psi_\beta^{(-)}\rangle ,
\qquad
G_0^{(-)}(E)=\frac{1}{E-H_0-i0}.
$$
^eq-ls-minus

The two states fit together into $S$. Since $U_I(t_f,t_i)=U_I(0,t_f)^\dagger U_I(0,t_i)$ exactly, the $S$ matrix is simply their overlap,

$$
S_{\beta\alpha}
=
\langle\psi_\beta^{(-)}|\psi_\alpha^{(+)}\rangle ,
$$
^eq-s-overlap

and the on-shell amplitude can be computed from either end:

$$
T_{\beta\alpha}(E)
=
\langle\beta|V|\psi_\alpha^{(+)}\rangle
=
\langle\psi_\beta^{(-)}|V|\alpha\rangle,
\qquad
E=E_\alpha=E_\beta .
$$

The two forms, called prior and post, agree on the shell because they describe the same input-output amplitude, compared once at the source and once at the detector.

It is convenient to give the two limits a name. With $\Omega(t)=U_I(0,t)=e^{iHt/\hbar}e^{-iH_0t/\hbar}$, the **Møller operators** are

$$
\Omega^{(\pm)}
=
\operatorname{s-}\lim_{t\to\mp\infty}\Omega(t),
\qquad
|\psi_\alpha^{(\pm)}\rangle=\Omega^{(\pm)}|\alpha\rangle,
\qquad
S=\Omega^{(-)\dagger}\Omega^{(+)} .
$$
^eq-moller

The superscript refers to the sign of the $i0$, not to the sign of the time limit. The strong limit "s-lim" means convergence on each normalizable wave packet, which is exactly what physical packets need (§S3.0).

### 6.2 Why the limits exist

We have been taking all these limits for granted. Do they actually exist? The answer is the picture of [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering#7.5 Why the folded switchboard has a limit|Scattering Theory 0, §7.5]]. The Schrödinger evolution itself never settles down: as $T\to\pm\infty$ the packet leaves every fixed region, and $e^{-iHT/\hbar}$ has no limit at all (§S3.1). The interaction picture escapes this because it splits exactly into one factor per end, $U_I(t_f,t_i)=\Omega(t_f)^\dagger\Omega(t_i)$, so the double limit becomes two single limits, one at the source and one at the detector (§S3.2). Each of them settles once the free packet has left the potential behind. The rate at which $\Omega(t)g$ still changes is bounded by $\|Ve^{-iH_0t/\hbar}g\|$, the overlap of the free packet with the potential, and if this overlap is integrable in time the limit exists. This is Cook's criterion (§S3.3). At late times the free packet sits at $r\simeq p|t|/m$, so for $|V|\lesssim r^{-n}$ the overlap falls like $|t|^{-n}$, which is integrable when $n>1$ (§S3.4). That is what "short range" means here: falling off faster than $1/r$, the quantum version of the classical count in [[Scattering Theory 0 Supplement - Details of the Delta-Barrier Problem#S7.3 How far can the blue circle reach?|ST0 Supplement, §S7.3]].

> [!important]- Realistic interatomic potentials have a hard core
> The strongly repulsive core, roughly $r^{-12}$, lies outside the class of potentials in §S3.4. $H$ must then be defined as a quadratic-form sum, with a variant of Cook's argument. The conclusion depends only on the tail, because at late times the free packet is far from the core.

### 6.3 Energy conservation and unitarity

With the limits in hand, the energy conservation of §3 becomes a theorem. Shifting $t$ in $\Omega(t)$ gives the intertwining relation $H\Omega^{(\pm)}=\Omega^{(\pm)}H_0$, which is the operator form of $H|\psi_\alpha^{(\pm)}\rangle=E_\alpha|\psi_\alpha^{(\pm)}\rangle$, and $[S,H_0]=0$ follows from it with the limits under control (§S4).

Unitarity is more subtle. The Møller operators preserve norms, but bound states of $H$ are orthogonal to both of their ranges: they stay where they are while the free packet leaves. $S$ is unitary exactly when $\operatorname{Ran}\Omega^{(+)}=\operatorname{Ran}\Omega^{(-)}$, that is, when every state that came in free also goes out free, and conversely (§S5). For the short-range potentials above something stronger holds, **asymptotic completeness** (Agmon 1975, Enss 1978): every state is either bound or free in both the remote past and the remote future, with no third kind. Then $S$ is unitary, and the exact Hamiltonian has the completeness relation

$$
\int d\alpha\,|\psi_\alpha^{(\pm)}\rangle\langle\psi_\alpha^{(\pm)}|
+
\sum_b|\chi_b\rangle\langle\chi_b|
=
1 ,
$$

which underlies the spectral representation of the full resolvent used in later notes.

> [!important]- Unitarity is a property of the full $S$
> If some outgoing states are left out of the description, for example product channels opened by the collision, the block of $S$ between the retained states is subunitary. The deficit is the probability carried into the omitted states. This is the origin of the subunitary elastic $S$ in photoassociation and inelastic loss.

### 6.4 Long-range potentials, and why ultracold interactions are short range

What goes wrong for a potential that falls off only like $1/r$? For the Coulomb potential the ordinary Møller operators do not exist (Dollard 1964). A component of momentum $p$ moving along $r\simeq pt/m$ keeps picking up an extra phase $-\eta\ln|t|$, with the Sommerfeld parameter $\eta$: again a clock that never stops. The cure is to build the potential along the free trajectory into the reference motion. $S$ then changes only by the Coulomb phases, and the Rutherford cross section is unchanged (§S6).

Fortunately, every interaction between neutral atoms, or between an atom and an ion, that we meet in this vault decays faster than $1/r$:

| interaction | long-range form | $n$ |
|---|---|---|
| van der Waals (e.g. Ag + Ag) | $-C_6/r^6$ | 6 |
| atom–ion (induced dipole) | $-C_4/r^4$ | 4 |
| dipole–dipole (polar molecules, magnetic atoms) | $C_3(1-3\cos^2\theta)/r^3$ | 3 |
| Coulomb (ion–ion), for comparison | $\kappa/r$ | 1 |

All but the last have $n>1$, so everything in this note applies to them without modification, including the couplings between internal states, which decay with the same tails. The threshold laws of [[Scattering Theory 6 - Low-Energy Scattering, Effective Range, and Scattering Length|Scattering Theory 6]] will need faster decay, but that changes how the table looks at low energy, not whether it exists (§S6.3).

---

## 7. Probabilities and rates

For continuum labels $S_{\beta\alpha}$ is a distribution, not a number, so to get probabilities we need wave packets, or integration over finite bins of final states. Once the identity and the energy delta function have been separated, the transition rate is

$$
dW_{\alpha\to\beta}
=
\frac{2\pi}{\hbar}
|T_{\beta\alpha}(E_\alpha)|^2
\delta(E_\beta-E_\alpha)d\mu(\beta),
$$

where $d\mu(\beta)$ includes the sums and integrations over final labels. This is Fermi's golden rule, with the first-order matrix element replaced by the exact $T$. Cross sections follow by dividing by the incoming flux, whose form depends on the representation; see [[Scattering Theory 4 - Transition Rates, Flux, and Cross Sections|Scattering Theory 4]].

---

## 8. Summary

Let us retrace the chain:

$$
H_0|\alpha\rangle=E_\alpha|\alpha\rangle
\;\longrightarrow\;
U_I(t_f,t_i)
\;\longrightarrow\;
S=\lim U_I
\;\longrightarrow\;
|\psi_\alpha^{(+)}\rangle
\;\longrightarrow\;
T
\;\longrightarrow\;
|\psi_\beta^{(-)}\rangle,\ \Omega^{(\pm)} .
$$

The interaction picture compares the exact evolution with the free motions of source and detector, and its limit at infinite times is $S$. Because nothing changes when the whole experiment is delayed, $S$ conserves energy, and what is left after the energy delta function is $T$. To compute $T$ exactly we needed the state prepared in the remote past. That state changes only by a free phase, so its equation of motion turns into the Lippmann–Schwinger equation, with the time integral into the past becoming $G_0^{(+)}$ and its $+i0$. From the state we read off $T=\langle\beta|V|\psi_\alpha^{(+)}\rangle$ and the equation $T=V+VG_0^{(+)}T$. Detection in the remote future gives $|\psi_\beta^{(-)}\rangle$, and $S$ is the overlap of the two. The limits are genuine whenever $V$ falls off faster than $1/r$, as every ultracold interaction does.

Coordinate-space outgoing waves, scattering amplitudes, partial waves, and differential cross sections are later representations of the same asymptotic structure.
