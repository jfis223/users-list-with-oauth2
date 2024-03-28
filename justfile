default:
  just --list

# Enables corepack in node
corepack-enable:
    ./nvm_exec.sh corepack enable

# Installs project package.json dependencies
install-deps:
    ./nvm_exec.sh yarn

# Starts React development server
dev:
    ./nvm_exec.sh yarn dev

# Starts React debug server
debug:
    ./nvm_exec.sh yarn debug

# Builds React application
build:
    ./nvm_exec.sh yarn build

# Preview Vite build
preview:
    ./nvm_exec.sh yarn preview

# Clean Vite cache
clean:
    rm -rf node_modules/.vite

# Styles files following prettier guidelines
prettier-fix:
    ./nvm_exec.sh yarn prettier-fix

# Proxy comand through nvm
nvm-exec command:
    ./nvm_exec.sh {{command}}