import type { DatapackConfig, ResourcePackConfig, SandstoneConfig } from 'sandstone'

export default {
  name: 'sandstone-template-testing',
  packs: {
    datapack: {
      description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' datapack.' ],
      packFormat: 19,
    } as DatapackConfig,
    resourcepack: {
      description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' resource pack.' ],
      packFormat: 18,
    } as ResourcePackConfig
  },
  onConflict: {
    default: 'warn',
  },
  namespace: 'sandstone-template_test',
  packUid: 'Ng2XfNdG',
  mcmeta: 'latest',
  saveOptions: { root: true },
} as SandstoneConfig
