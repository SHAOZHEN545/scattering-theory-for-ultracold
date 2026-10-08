This note is a supplement to §5 of [[Scattering Theory 0 - One Problem Worked Through - The Basic Concepts of Scattering|Scattering Theory 0]]. There the time-dependent solution of the delta-barrier problem was found from a guess built only from the left-incident eigenstates, and then checked. Here we start instead from the most general solution, which contains the eigenstates incident from both sides, and derive which of them take part. The result is the same; the point is to see that nothing was lost by the guess.

Notation and conventions are those of Scattering Theory 0. Section numbers without a prefix refer to this note; "ST0 §n" refers to Scattering Theory 0.

---

## 1. Both families of eigenstates

At each energy $E_k$, $H$ has **two** independent eigenstates (ST0 §2.1). ST0 used one of them, the solution with a source on the left. For a second one we take the solution with a source on the right ($A=0$, $D=1$). The barrier is symmetric, so this is simply the mirror image $\phi_k(-x)$.

It is convenient to label the mirror image by $-k$. For $k<0$, define $\phi_k(x)\equiv\phi_{|k|}(-x)$. Both families are then described by one formula,

$$
\phi_k(x)=\frac{1}{\sqrt{2\pi}}\Big[e^{ikx}+r(|k|)\,e^{i|k||x|}\Big],\qquad k\in\mathbb R,
$$

where $\tau$ and $r$ are the functions of ST0 §2.3, evaluated at $|k|>0$. For $k>0$ this is the wave incident from the left; for $k<0$ it is the wave incident from the right. The twofold degeneracy now sits in the sign of $k$, just as for $H_0$, where $|k\rangle$ and $|{-k}\rangle$ have the same energy. In both cases $\phi_k$ is the plane wave $\langle x|k\rangle$ plus a wave that only runs away from the origin.

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

for some coefficient function $c(k)$. Both families appear in this expansion. The part of $c$ at $k>0$ says how much of each left-incident eigenstate the solution contains, and the part at $k<0$ how much of each right-incident one. Whether the right-incident family actually takes part is **not** something to assume. It has to come out of the initial condition, and in §3 it will.

> [!INFO]- Remark: the choice of basis, and what we will not need
> *Choice of basis.* Inside each two-dimensional eigenspace any two independent combinations would do, for example the even and odd combinations. The coefficient function would then be different but equally valid. We use left- and right-incident solutions because their coefficients turn out to be the simplest possible ones (§3).
>
> *Bound states.* For a delta *well* the expansion would also need the bound state.
>
> *What we will not need.* The usual way to find $c(k)$ is to project the state at one time onto $\phi_k$, which requires the normalization integrals $\langle\phi_k|\phi_{k'}\rangle$. We will find $c(k)$ in a different way, from what the solution looks like in the remote past. That route is shorter, and it is closer to how the experiment is actually posed.

---

## 2. The solution as free packets on half lines

To see what $\psi(x,t)$ looks like before and after the collision, sort its terms in the same way as the table of ST0 §2.1: on each side of the barrier, waves moving toward it and waves moving away. For any momentum amplitude $f(k)$, let $|f\rangle=\int dk\,f(k)|k\rangle$ be the corresponding free packet, and split it into its right-moving and left-moving parts,

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

Each of the four terms is a free packet, evolved with $H_0$ and cut off to a half line. The **incoming** terms are kept on the side they come from: right-moving on the left, left-moving on the right. These are the $A$ and $D$ terms of ST0 §2.1, combined over all $k$. The **outgoing** terms are kept on the side they go to: right-moving on the right, left-moving on the left. These are the $B$ and $C$ terms.

The outgoing amplitude says where the outgoing waves come from. For $k>0$, $c_{\rm out}(k)=\tau\,c(k)+r\,c(-k)$: the right-moving wave on the right is the part of the left-incident wave that was transmitted, plus the part of the right-incident wave that was reflected.

> [!NOTE]- Derivation: the four-term decomposition
> Insert the region-by-region form of $\phi_k$ (ST0 §2.1 for $k>0$, the check in §1 for $k<0$). For $x<0$,
> $$
> \sqrt{2\pi}\,\psi(x,t)=\int_{k>0}dk\,c(k)\,e^{-iE_kt/\hbar}\Big[e^{ikx}+r(k)\,e^{-ikx}\Big]
> +\int_{k<0}dk\,c(k)\,e^{-iE_kt/\hbar}\,\tau(|k|)\,e^{ikx}.
> $$
> The first term, $\int_{k>0}dk\,c(k)\,e^{ikx-iE_kt/\hbar}$, is $\sqrt{2\pi}\,\langle x|e^{-iH_0t/\hbar}|c_\rightarrow\rangle$. In the $r$ term substitute $k\to-k$. Since $E_{-k}=E_k$, it becomes $\int_{k<0}dk\,r(|k|)\,c(-k)\,e^{ikx-iE_kt/\hbar}$. Adding the $\tau$ term gives
> $$
> \int_{k<0}dk\,\Big[\tau(|k|)\,c(k)+r(|k|)\,c(-k)\Big]e^{ikx-iE_kt/\hbar}=\sqrt{2\pi}\,\langle x|e^{-iH_0t/\hbar}|c_{{\rm out},\leftarrow}\rangle .
> $$
> For $x>0$ the same steps, with the roles of $k>0$ and $k<0$ exchanged, give $\langle x|e^{-iH_0t/\hbar}|c_\leftarrow\rangle+\langle x|e^{-iH_0t/\hbar}|c_{{\rm out},\rightarrow}\rangle$. No approximation has been made.

So far nothing has been assumed about $c(k)$. To find it, we use the fact of ST0 §5.2: a free packet with only positive momenta is found entirely at $x<0$ as $t\to-\infty$ and entirely at $x>0$ as $t\to+\infty$, and a packet with only negative momenta does the opposite.

---

## 3. Long before the collision: $c=g$

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

> [!NOTE]- Derivation: the limit $t_i\to-\infty$, done carefully
> Write $\psi_c(t)=\int dk\,c(k)\,e^{-iE_kt/\hbar}\phi_k$, and let $\psi_{\rm exp}(t)$ be the true solution with $\psi_{\rm exp}(t_i)=e^{-iH_0t_i/\hbar}|g\rangle$. Both solve the same Schrödinger equation, and $e^{-iHt/\hbar}$ is unitary, so the distance between them does not depend on time. Evaluating it at $t_i$,
> $$
> \big\|\psi_{\rm exp}(t)-\psi_g(t)\big\|=\big\|\,e^{-iH_0t_i/\hbar}|g\rangle-\psi_g(t_i)\,\big\|\;\xrightarrow{\;t_i\to-\infty\;}\;0 .
> $$
> The last step is the result above with $c=g$. So the true state converges to $\psi_g(t)$, at every $t$.
>
> A by-product: the norm of $\psi_c(t)$ is constant in time, and in the remote past it equals the norm of $e^{-iH_0t/\hbar}|c\rangle$. Hence $\|\psi_c\|=\|c\|$ for every $c$, and distinct coefficient functions give distinct solutions. This is the normalization of the $\phi_k$, obtained without computing $\langle\phi_k|\phi_{k'}\rangle$.

**Which eigenstates take part is decided by the packet.** The right-incident eigenstates enter with coefficient $g(k)$ at $k<0$. In ST0 §2.1 "a source on the left" was imposed on each eigenstate by setting $D=0$. Here it is a property of the packet: a packet whose free motion comes in from the left has $g=0$ at $k<0$ and contains only left-incident eigenstates. This is the guess of ST0 §5.1. A source on each side would simply give $g$ weight at both signs of $k$, and both families would take part.

> [!INFO]- Remark: the tail of the Gaussian
> A real Gaussian $g(k)$ is not exactly zero for $k<0$; its weight there is of order $e^{-k_0^2/2\sigma_k^2}$. By ST0 §5.2, this tail is a small left-moving free packet that in the remote past was far to the **right**. So the prepared state $e^{-iH_0t_i/\hbar}|g\rangle$ contains a tiny piece arriving from the other side. The general solution handles it correctly: it enters through the right-incident eigenstates, with coefficient $g(k<0)$. The guess of ST0, which integrates only over $k>0$, drops this piece. This is why ST0 §4.1 required that essentially all momenta be positive, $\sigma_k\ll k_0$.

---

## 4. Long after the collision

Let $t\to+\infty$. The roles are exchanged. The packet of $|g_\rightarrow\rangle$ has moved to $x>0$, where $\theta(-x)$ removes it. The packet of $|g_\leftarrow\rangle$ has moved to $x<0$, where $\theta(x)$ removes it. The two outgoing packets are now on the sides where they are kept. Hence

$$
\big\|\,\psi(t)-e^{-iH_0t/\hbar}|g_{\rm out}\rangle\,\big\|\;\xrightarrow{\;t\to+\infty\;}\;0,
\qquad
\langle k|g_{\rm out}\rangle=\tau(|k|)\,g(k)+r(|k|)\,g(-k).
$$

For a packet incident from the left ($g=0$ for $k<0$) this reduces to the result of ST0 §5.4,

$$
|g_{\rm out}\rangle=\int_0^\infty dk\;g(k)\Big[\tau(k)\,|k\rangle+r(k)\,|{-k}\rangle\Big].
$$

In general, the outgoing amplitude at momentum $k$ mixes the incoming amplitudes at $k$ and $-k$, the two free states with the same energy:

$$
\begin{pmatrix}\langle k|g_{\rm out}\rangle\\ \langle -k|g_{\rm out}\rangle\end{pmatrix}
=\begin{pmatrix}\tau & r\\ r & \tau\end{pmatrix}
\begin{pmatrix}g(k)\\ g(-k)\end{pmatrix},\qquad k>0,
$$

with $\tau=\tau(k)$, $r=r(k)$.

> [!INFO]- Numerical check
> With the parameters of ST0 §5.5 and the grid extended to $k<0$, the four-term decomposition of §2 and the direct evaluation of $\int dk\,g(k)\,e^{-iE_kt}\phi_k(x)$ agree to $10^{-15}$ at all times computed ($t=-60,-5,0,5,60$). The script is `make_fig_sec5.py`.
