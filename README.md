# 🧪 Unit Testing - Create New Account Page System

This project is a form validation system developed as part of the **Software Verification and Validation** course. It includes a front-end registration form and end-to-end automated tests using **Cypress**.

---

🌐 Live Interface

> A simple HTML form where users can register by entering:
- First Name
- Last Name
- Email
- Password (with strength rules)
- Confirm Password
- Date of Birth (in `dd/mm/yyyy` format)

✅ Form Validation Rules
- All fields are required
- Password must be at least 8 characters, include uppercase, lowercase, and a number
- Confirm Password must match Password
- Email must be in a valid format
- Date of Birth must match `dd/mm/yyyy` format

---

🧪 Automated Testing with Cypress

📁 Test File Location
```bash
cypress/e2e/form_spec.cy.js


🧫 What We Test ?

✅ Success case: valid input
❌ Password mismatch
❌ Short password
❌ Empty fields
❌ Invalid date format
❌ Missing date of birth


🚀 How to Run Locally

1-) git clone https://github.com/Semihkulekcioglu/Unit_Testing.git
cd Unit_Testing

2-) npm install

3-) npm run start

4-) npm run cy:open

⚙️ GitHub Actions CI
This project includes a .github/workflows/test.yml workflow that automatically runs Cypress tests on every push to main branch.

📸 Screenshots
![GitHub Actions Online Testing](https://github.com/user-attachments/assets/b307fd19-2af5-408a-84cf-643795feaf9d)

👤 Author
Muhammed Semih Külekçioğlu
Zeynep Sude Terkan

