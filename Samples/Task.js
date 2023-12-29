const form = document.querySelector('form');
const ticketsContainer = document.getElementById('tickets');
const tickets = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const issue = document.getElementById('issue').value;
  const description = document.getElementById('description').value;
  
  createTicket(issue, description);
  form.reset();
});

function createTicket(issue, description) {
  const ticket = {
    issue: issue,
    description: description,
    completed: false
  };
  
  tickets.push(ticket);
}

function markTicketComplete(index) {
  tickets[index].completed = true;
}

function displayTickets() {
  ticketsContainer.innerHTML = '';
  
  tickets.forEach(function(ticket, index) {
    const ticketElement = document.createElement('div');
    ticketElement.classList.add('ticket');
    
    const issueHeading = document.createElement('h3');
    issueHeading.textContent = ticket.issue;
    
    const descriptionPara = document.createElement('p');
    descriptionPara.textContent = ticket.description;
    
    ticketElement.appendChild(issueHeading);
    ticketElement.appendChild(descriptionPara);
    
    ticketsContainer.appendChild(ticketElement);
  });
}

function sendTicketsByEmail() {
  const email = "briomwaura@gmail.com";
  let emailBody = "Ticket Details:\n\n";

  tickets.forEach(function(ticket, index) {
    emailBody += `Ticket ${index + 1}: ${ticket.issue}\n`;
    emailBody += `Description: ${ticket.description}\n`;
    emailBody += `Completed: ${ticket.completed ? 'Yes' : 'No'}\n\n`;
  });

  // Use your preferred method or library for sending an email
  // Here, we're using a simple alert to display the email body
  alert(`Sending email to ${email}\n\nEmail Body:\n\n${emailBody}`);
}





