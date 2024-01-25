# Task Management API Integration with twilio

APIs and cron jobs for managing tasks and subtasks. Below are the key functionalities, along with information on how to set up locally and the available endpoints:

Project Video LINK - 

### Local Setup

run this in your terminal
```bash
git clone https://github.com/your_username/OpeninApp.git

cd TodoBackend
npm install
```
Set up your environment variables:

Create a .env file based on the provided .env.example file.
Replace placeholder values with your actual configuration.

Start the server:
```bash
npm start
```

The server should now be running locally. You can access the API endpoints at http://localhost:8080.

### API Endpoints

Endpoint: POST `/api/v0/task/task`
Input: title, description, due_date, jwt auth token
Create Subtask

Endpoint: POST `/api/v0/task/tasks`
Get All User Tasks

Endpoint: GET `/api/v0/task/sub_tasks`
Filters: priority, due date, proper pagination
Get All User Subtasks

Endpoint: POST `/api/v0/task/update_task`
Filters: task_id (if passed)
Update Task

Endpoint: POST `/api/v0/task/update_subtask`
Update: due_date and status ("TODO" or "DONE")
Update Subtask

Endpoint: POST `/api/v0/task/task`
Update: status (0 or 1)
Delete Task (Soft Deletion)

Endpoint: DELETE `/api/v0/task/sub_task`
Delete Subtask (Soft Deletion)

Endpoint: DELETE `/api/v0/task/task`


### Cron Jobs
Change Task Priority

Logic: Automatically adjusts priority based on due_date.
Voice Calling using Twilio

Logic: Calls users if a task passes its due_date, prioritized based on user priority (0, 1, 2).