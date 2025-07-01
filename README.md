# 🚀 Serverless Microservices Platform with CI/CD, IaC, and Observability on Azure Free Tier

This project demonstrates how to build a **scalable, secure, and observable serverless microservices platform** using **Azure Functions**, **Terraform**, **GitHub Actions**, and **Azure API Management** — all deployed on the **Azure Free Tier**.

---

## 📦 Tech Stack

| Layer             | Tools/Services Used                       |
|------------------|--------------------------------------------|
| Serverless APIs  | Azure Functions (user-service, order-service) |
| Infrastructure   | Terraform (OpenTofu)                       |
| CI/CD            | GitHub Actions                             |
| API Gateway      | Azure API Management (APIM)                |
| Monitoring       | Azure Monitor + Application Insights       |

---

## 🧩 Microservices Overview

### ✅ user-service (Azure Function)
- Handles user data (e.g., fetch user info)
- Triggered via HTTP API call

### ✅ order-service (Azure Function)
- Processes orders (e.g., CreateOrder)
- Triggered via HTTP API call

---

## ⚙️ CI/CD Pipeline

- When code is pushed to GitHub:
  - GitHub Actions triggers Terraform to provision infrastructure
  - Deploys the user-service automatically

> `order-service` was deployed manually using Azure CLI + Core Tools (for learning/demo purpose)

---

## 🌐 API Gateway (APIM)

Both microservices are exposed through a **unified API URL** using Azure API Management:

| API Route              | Description              |
|------------------------|--------------------------|
| `/api/user`            | user-service endpoint    |
| `/api/order`           | order-service endpoint   |

Features added via APIM:
- ✅ Subscription Key Enforcement
- ✅ Rate Limiting (10 requests/min)

---

## 📊 Monitoring & Observability

- Azure Application Insights used to collect:
  - Request count
  - Response times
  - Errors and logs

we can run **Kusto Queries** to analyze behavior:
```kusto
requests
| summarize count() by name

## 🧪 Testing with Postman

* Add your APIM URL and append the endpoint (`/api/user` or `/api/order`)
* Pass the `Ocp-Apim-Subscription-Key` in the header
* Test `POST` requests like:

```json
{
  "orderId": "order-1234"
}
```

---



**Imagine This Real-Life Example: Online Order System

### Scenario:

You’re building the **backend of an online store**, like Flipkart or Amazon.

* One function deals with **users** (login, profile, etc.)
* Another deals with **orders** (place order, check status)

But instead of building a big app, you're breaking it into **smaller services** called **microservices** — and you're making them **serverless**, which means:

> “You don’t manage any server. You just upload your code, and Azure runs it whenever needed.”

---
Scenario:**
You’re building the backend of an online store, like Flipkart or Amazon.

One function deals with users (login, profile, etc.)

Another deals with orders (place order, check status)

But instead of building a big app, you're breaking it into smaller services called microservices — and you're making them serverless, which means:

“You don’t manage any server. You just upload your code, and Azure runs it whenever needed.”


## 🧩 Microservices we Created:
| Microservice    | Purpose                                         | Hosted As      |
| --------------- | ----------------------------------------------- | -------------- |
| `user-service`  | Handles user-related API calls (e.g., get user) | Azure Function |
| `order-service` | Handles order APIs (e.g., place order)          | Azure Function |



---

## 🏗 How You Built It (Technology Stack):

| Feature                | What You Used                   | What It Means                                    |
| ---------------------- | ------------------------------- | ------------------------------------------------ |
| Serverless Functions   | **Azure Functions**             | Auto-scalable mini code pieces                   |
| CI/CD Automation       | **GitHub Actions**              | Auto deploy when you push code to GitHub         |
| Infrastructure as Code | **Terraform (OpenTofu)**        | Creates Azure resources using code               |
| API Gateway            | **Azure API Management (APIM)** | One URL to access both services securely         |
| Monitoring             | **Application Insights**        | See how your system is performing, detect issues |

---

## 👣 How It Works — In Steps:

1. You hit an API like:

   ```
   https://<apim>.azure-api.net/order/CreateOrder
   ```

2. That goes through:

   * API Gateway (APIM) — which checks:

     * "Is this a real client?"
     * "Too many requests?"
   * Then routes it to the `order-service` Azure Function

3. The function runs **only when needed** — processes the request and replies

4. You can see:

   * Logs
   * Failures
   * Number of requests
     in **Application Insights**

---

## 🏭 Real Industry Use Case

Companies like **Zomato, Swiggy, Flipkart** use this same concept:

| What You Did             | Real-World Example                                       |
| ------------------------ | -------------------------------------------------------- |
| `user-service` Function  | Zomato’s user login or profile lookup                    |
| `order-service` Function | Swiggy’s “Place Order” or “Track Order” API              |
| API Gateway              | Like one gateway to access both user & order APIs        |
| Monitoring Logs/Errors   | When a request fails or slows, DevOps teams get notified |

---

> Q: What problem does we project solve?**
> A: It shows how to build a secure, auto-scalable backend using Azure’s serverless platform. It splits the system into small independent services (microservices) and adds automation, monitoring, and security.
