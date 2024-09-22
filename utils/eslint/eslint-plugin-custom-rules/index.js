module.exports = {
  rules: {
    "no-react-hook-in-async-component": {
      create: function (context) {
        return {
          FunctionDeclaration(node) {
            if (node.async) {
              checkForHooks(node.body);
            }
          },
          FunctionExpression(node) {
            if (node.async) {
              checkForHooks(node.body);
            }
          },
          ArrowFunctionExpression(node) {
            if (node.async) {
              checkForHooks(node.body);
            }
          },
        };

        function checkForHooks(body) {
          if (body.type === "BlockStatement") {
            body.body.forEach((statement) => {
              if (
                statement.type === "ExpressionStatement" &&
                statement.expression.type === "CallExpression"
              ) {
                reportIfHook(statement.expression.callee);
              } else if (statement.type === "VariableDeclaration") {
                statement.declarations.forEach((declaration) => {
                  if (
                    declaration.init &&
                    declaration.init.type === "CallExpression"
                  ) {
                    reportIfHook(declaration.init.callee);
                  }
                });
              } else if (
                statement.type === "ReturnStatement" &&
                statement.argument &&
                statement.argument.type === "CallExpression"
              ) {
                reportIfHook(statement.argument.callee);
              }
            });
          }
        }

        function reportIfHook(callee) {
          if (callee.type === "Identifier" && /^use[A-Z]/.test(callee.name)) {
            context.report({
              node: callee,
              message: `React hook "${callee.name}" is used inside an async function, which can lead to unexpected behavior.`,
            });
          }
        }
      },
    },
  },
};
