import './ovh-api-services.module';

// Disabling both `import/extensions` and `import/no-unresolved` ESLint rules
// are required due to use of `rollup-plugin-glob-import`.
// eslint-disable-next-line import/extensions, import/no-unresolved
import './api/**/*.js';
