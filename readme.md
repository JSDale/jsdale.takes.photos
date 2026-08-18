# Read Me

## Running Instructions

To start the service `cd` into `/website/` and run `npm run dev`, or `npm run start`. 

### Docker

- cd into `./website`
- to create the container using compose.yaml, 'docker compose up -d --build', this will also create the image.

### Running on a Raspberry Pi via Cloudflare Tunnel (no port forwarding)

`compose.yaml` runs the app alongside a `cloudflared` sidecar container. The
tunnel dials out to Cloudflare, so nothing needs to be forwarded on the
router and the app is not published on the LAN.

**1. Prep the Pi (once)**

- Flash **64-bit** Raspberry Pi OS (Lite is fine) — a 3B+ can run 32-bit, but
  64-bit gives a smoother Docker experience.
- Install Docker: `curl -fsSL https://get.docker.com | sh`, then
  `sudo usermod -aG docker $USER` and re-login.
- Docker Compose v2 is bundled with the script above as the `docker compose`
  plugin.

**2. Create the tunnel in Cloudflare**

- Cloudflare dashboard → **Zero Trust** → **Networks** → **Tunnels** →
  **Create a tunnel** → choose **Cloudflared**, give it a name (e.g.
  `jsdale-takes-photos`).
- On the "Install connector" step, don't run the suggested `docker run`
  command — just copy the **token** shown in it (the long string after
  `--token`, or the `TUNNEL_TOKEN=...` value on the install page).
- Under **Public Hostname**, add the domain/subdomain you want to serve the
  site on, with:
  - Type: `HTTP`
  - URL: `app:3000` (the compose service name — cloudflared resolves it over
    Docker's internal network, no `ports:` mapping needed)

**3. Configure and start on the Pi**

- Copy the repo to the Pi and `cd website`.
- `cp .env.example .env` and paste the token in as `TUNNEL_TOKEN=...`.
- `docker compose up -d --build`.
- Check `docker compose logs -f cloudflared` for a "Registered tunnel
  connection" message, then visit the hostname you configured.

The tunnel connection shows as **Healthy** in the Zero Trust dashboard once
it's up. To change the port the app listens on or the public route, edit the
hostname mapping in the dashboard — no container restart required for
routing changes, only for app code changes (`docker compose up -d --build`).
