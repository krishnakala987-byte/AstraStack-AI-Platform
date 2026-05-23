#  AstraOps

<div align="center">

**Enterprise-grade, AI-powered cloud-native platform engineering project**  
*Inspired by the architectures of Netflix, Amazon, Spotify, Uber, and OpenAI*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-JavaScript-green?logo=node.js)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-blue?logo=docker)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestrated-326ce5?logo=kubernetes)](https://kubernetes.io/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?logo=github-actions)](https://github.com/features/actions)

</div>

---

##  Overview

AstraOps is a production-grade, cloud-native platform built around microservices, GitOps workflows, and AI-powered operational intelligence. The platform integrates a fully containerized service mesh, Kubernetes-native deployments, real-time observability, and DevSecOps automation — making it suitable for high-availability enterprise workloads.

---

##  Architecture

```
                          ┌─────────────────┐
                          │   API Gateway   │  :8080
                          └────────┬────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                    │
     ┌────────▼────────┐  ┌───────▼───────┐  ┌────────▼────────┐
     │  Auth Service   │  │ AI-Ops Service│  │  (more svcs)    │
     │     :3000       │  │    :4000      │  │                 │
     └────────┬────────┘  └───────────────┘  └─────────────────┘
              │
     ┌────────▼────────┐   ┌───────────────┐
     │   PostgreSQL    │   │     Redis      │
     │     :5432       │   │     :6379      │
     └─────────────────┘   └───────────────┘

     ┌─────────────────┐   ┌───────────────┐
     │   Prometheus    │──▶│    Grafana    │
     │     :9090       │   │     :3001     │
     └─────────────────┘   └───────────────┘
```

---

##  Features

- **Microservices Architecture** — Independently deployable services (Auth, API Gateway, AI-Ops) following domain-driven design principles
- **AI-Powered Operations** — Integrated AIOps service powered by OpenAI for intelligent anomaly detection and operational automation
- **GitOps Workflows** — ArgoCD-driven continuous delivery with declarative infrastructure
- **Full Observability Stack** — Prometheus metrics, Grafana dashboards, Loki log aggregation, and OpenTelemetry tracing
- **DevSecOps Automation** — Security scanning baked into CI/CD pipelines via GitHub Actions
- **Kubernetes-Native** — Helm charts and Kubernetes manifests for production-grade deployments
- **IaC with Terraform** — Reproducible, version-controlled AWS infrastructure

---

##  Tech Stack

| Layer | Technologies |
|---|---|
| **Cloud** | AWS |
| **Containers & Orchestration** | Docker, Kubernetes, Helm |
| **Infrastructure as Code** | Terraform |
| **GitOps / CD** | ArgoCD |
| **Observability** | Prometheus, Grafana, Loki, OpenTelemetry |
| **Databases** | PostgreSQL, Redis |
| **CI/CD** | GitHub Actions |
| **AI / AIOps** | OpenAI API |
| **Runtime** | Node.js (JavaScript) |

---

##  Repository Structure

```
AstraOps/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD pipelines
├── apps/
│   ├── auth-service/        # Authentication & JWT service (port 3000)
│   ├── api-gateway/         # Central API gateway (port 8080)
│   └── ai-ops-service/      # AI-powered ops intelligence (port 4000)
├── k8s/                     # Kubernetes manifests & Helm charts
├── observability/
│   └── prometheus/          # Prometheus scrape config & alerting rules
├── docker-compose.yml       # Local development stack
├── .gitignore
├── LICENSE
└── README.md
```

---

##  Getting Started

### Prerequisites

Make sure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/) & [Docker Compose](https://docs.docker.com/compose/install/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Helm](https://helm.sh/docs/intro/install/)
- [Node.js](https://nodejs.org/) v18+
- An OpenAI API Key (for the AI-Ops service)

### Local Development with Docker Compose

1. **Clone the repository**

```bash
git clone https://github.com/krishnakala987-byte/AstraOps.git
cd AstraOps
```

2. **Set environment variables**

```bash
cp .env.example .env
# Edit .env and add your OPENAI_API_KEY
```

3. **Start the full stack**

```bash
docker-compose up --build
```

4. **Verify services are running**

| Service | URL |
|---|---|
| API Gateway | http://localhost:8080 |
| Auth Service | http://localhost:3000 |
| AI-Ops Service | http://localhost:4000 |
| Prometheus | http://localhost:9090 |
| Grafana | http://localhost:3001 |
| PostgreSQL | localhost:5432 |
| Redis | localhost:6379 |

---

##  Kubernetes Deployment

```bash
# Apply Kubernetes manifests
kubectl apply -f k8s/

# Or via Helm
helm upgrade --install astraops ./k8s/helm \
  --namespace astraops \
  --create-namespace \
  --set openaiApiKey=$OPENAI_API_KEY
```

---

##  Observability

Prometheus scrapes metrics from all services automatically using the configuration in `observability/prometheus/prometheus.yml`.

**Grafana** (http://localhost:3001) provides pre-built dashboards for:
- Service health and uptime
- Request throughput and error rates
- Database connection pool metrics
- AI-Ops anomaly detection signals

Default Grafana credentials: `admin / admin` *(change immediately in production)*

---

##  CI/CD Pipeline

GitHub Actions workflows in `.github/workflows/` handle:

- **Build & Test** — On every push and pull request
- **Docker Build & Push** — Image build on merge to `master`
- **Security Scanning** — Container and dependency vulnerability scans
- **Kubernetes Deploy** — GitOps-driven deployment via ArgoCD

---

##  Security

- JWT-based authentication handled by the Auth Service
- Secrets managed via environment variables (use AWS Secrets Manager or Vault in production)
- DevSecOps pipeline includes SAST and container image scanning
- Network policies enforced at the Kubernetes layer

>  **Note:** Default credentials in `docker-compose.yml` are for local development only. Never use them in production.

---

##  Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'feat: add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

##  License

This project is licensed under the [MIT License](LICENSE).

---

##  Author

**krishnakala987-byte**  
[GitHub Profile](https://github.com/krishnakala987-byte)

---

<div align="center">
<sub>Built with  — inspired by Netflix, Amazon, Spotify, Uber & OpenAI</sub>
</div>
