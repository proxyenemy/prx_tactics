import os
import math
import time

A = 0
B = 0
theta_spacing = 0.07
phi_spacing = 0.02
illumination = ".,-~:;=!*#$@"  # символы для отображения разных уровней освещенности

# размеры окна вывода
width, height = 400, 200

def clear_console():
    os.system('cls' if os.name == 'nt' else 'clear')

def render_frame(A, B, theta_spacing, phi_spacing):
    output = [[' ' for _ in range(width)] for _ in range(height)]
    zbuffer = [[0 for _ in range(width)] for _ in range(height)]

    cos_A = math.cos(A)
    sin_A = math.sin(A)
    cos_B = math.cos(B)
    sin_B = math.sin(B)

    theta = 0
    while theta < 2 * math.pi:
        cos_theta = math.cos(theta)
        sin_theta = math.sin(theta)
        
        phi = 0
        while phi < 2 * math.pi:
            cos_phi = math.cos(phi)
            sin_phi = math.sin(phi)
            
            # координаты торуса в 3D
            circle_x = cos_theta * (2 + cos_phi)
            circle_y = sin_theta * (2 + cos_phi)
            circle_z = sin_phi + 5  # перемещение торуса вдаль
            
            # вращение торуса по двум осям
            x = circle_x * cos_B - circle_z * sin_B
            y = circle_y
            z = circle_x * sin_B + circle_z * cos_B
            ooz = 1 / z  # обратная Z-координата для перспективы

            # проецирование 3D на 2D
            xp = int(width / 2 + x * ooz * 15)
            yp = int(height / 2 - y * ooz * 15)

            # индекс освещенности
            luminance_index = int((cos_phi * cos_theta + sin_A) * 5)
            if luminance_index < 0:
                luminance_index = 0

            if 0 <= xp < width and 0 <= yp < height:
                if ooz > zbuffer[yp][xp]:
                    zbuffer[yp][xp] = ooz
                    output[yp][xp] = illumination[luminance_index]

            phi += phi_spacing
        theta += theta_spacing

    return output

def display_output(output):
    clear_console()
    for row in output:
        print("".join(row))

while True:
    frame = render_frame(A, B, theta_spacing, phi_spacing)
    display_output(frame)
    A += 0.04
    B += 0.03
    time.sleep(0.03)
