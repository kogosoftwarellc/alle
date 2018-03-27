const chalk = require("chalk");
const commander = require("commander");
const init = require("./commands/init");
const packageJson = require("../../package.json");

process.on("unhandledRejection", err => {
  throw err;
});

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments("<project-directory>")
  .usage(`[options]`)
  .on("--help", () => {
    console.log(
      `   This project was inspired by the https://github.com/boennemann/alle README.`
    );
  });

program
  .command("init [dir]")
  .description(
    `Creates a basic alle monorepo structure in the current directory if no directory name is given.`
  )
  .action(init);

program
  .command("install")
  .description(
    `Runs npm i in each of the package directories (when dependencies are defined therein) and the
                       repo directory. Creates the symlink packages/node_modules -> packages/ to allow packages to 
                       reference each other.`
  )
  .action();

program
  .command("publish [packages...]")
  .description(
    `Publish each of the packages given. If no packages are given, the packages directory 
                       would be scanned for packages and the user would be prompted in the 
                       terminal to choose which available packages they'd like to publish`
  )
  .action();

program
  .command("run <command...>")
  .description(`Runs the command in each of the packages`)
  .action();

program
  .command("test")
  .alias("t")
  .description("Alias for alle run npm t")
  .action();

program.parse(process.argv);