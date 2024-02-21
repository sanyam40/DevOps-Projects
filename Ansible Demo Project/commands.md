## Setting Up Passwordless Authentication

### Method 1: Using `ssh-copy-id`

1. Generate a key pair:
   ```bash
   ssh-keygen
   ```
2. Copy the generated public key:
   ```bash
   cat /home/ubuntu/.ssh/id_rsa.pub
   ```
3. Paste the key on the remote server.
4. On the second machine, repeat steps 1 and 2.
5. Edit the authorized_keys file on the second machine:
   ```bash
   vim ~/.ssh/authorized_keys
   ```
6. Paste the key from the first machine.
7. Now, SSH can be done without a password.

## Ansible Ad-hoc Commands

1. Create an inventory file:
   ```bash
   vim inventory
   ```
   Store the IP address of the remote server.
2. Run the command to execute a shell on the remote server:
   ```bash
   ansible -i inventory all -m "shell" -a "touch devopsClass"
   ```
3. Check the result on the target machine:
   ```bash
   ls -ltr
   ```
   - Check the number of processes on the targeted server:
     ```bash
     ansible -i inventory all -m "shell" -a "nproc"
     ```
   - Check the disk space on the target server:
     ```bash
     ansible -i inventory all -m "shell" -a "df"
     ```

## Grouping Servers in Inventory

```ini
[webservers]
172.31.31.175

[dbservers]
172.31.10.175
```

## Ansible Playbooks Demo

### Installing and Starting Nginx on Ubuntu

1. Create a playbook file using vim (e.g., `install_nginx.yml`):
2. Run the playbook:

   ```bash
   ansible-playbook install_nginx.yml
   ```
