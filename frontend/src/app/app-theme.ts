import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const AuthShieldPreset = definePreset(Aura, {
    components: {
        paginator: {
            root: {
                background: 'transparent',
                color: '#5c6f88',
                borderRadius: '9px'
            },

            navButton: {
                background: 'transparent',
                color: '#5c6f88',
                hoverBackground: 'rgba(255, 255, 255, 0.7)',
                hoverColor: '#ff5e62',
                selectedBackground: 'rgba(255, 131, 100, 0.18)',
                selectedColor: '#ff5e62'
            }
        },

        select: {
            colorScheme: {
                light: {
                    root: {
                        background: 'rgba(255, 255, 255, 0.72)',
                        color: '#5c6f88',
                        borderColor: 'rgba(28, 58, 94, 0.1)'
                    }
                }
            }
        }
    }
});

export default AuthShieldPreset;