import {ConfigContext, ExpoConfig} from '@expo/config';

// If you want to change app version, please change only this object
// So we no longer need to find version number and code
// To prevent old version/code
const versions = {
  number: '1.0.0',
  code: 1,
  app_name: 'Car Report',
  app_slug: 'car-plates',
  app_scheme: 'carplates',
  bundle_idf: 'md.plates.com',
};

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name:versions.app_name,
  icon: './assets/images/icon.png',
  version: versions.number,
  slug: versions.app_slug,
  orientation: 'portrait',
  scheme: versions.app_scheme,
  jsEngine: 'hermes',
  ios: {
    bundleIdentifier: versions.bundle_idf,
    buildNumber: versions.number,
    config: {},
    supportsTablet: true,
    infoPlist: {
      CFBundleAllowMixedLocalizations: true,
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    package: versions.bundle_idf,
    permissions: [],
    config: {
      googleMaps: {},
    },
    versionCode: versions.code,
    useNextNotificationsApi: true,
  },

  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#475949',
  },
  updates: {
    fallbackToCacheTimeout: 0,
    enabled: false,
  },
  assetBundlePatterns: ['**/*'],
  privacy: 'unlisted',
  platforms: ['ios', 'android', 'web'],
  web: {
    favicon: './assets/icon.png',
  },
});
